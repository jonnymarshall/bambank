class TransactionsController < ApplicationController
  protect_from_forgery with: :null_session
  before_action :authenticate_user!

  def index
    render json: TransactionSerializer.new(current_user.all_transactions)
  end

  def create
    transaction = Transaction.new(transaction_params)
    if transaction.save
      render json: TransactionSerializer.new(current_user.all_transactions)
    else
      render json: { error: transaction.errors.messages }, status: 422
    end
  end

  private

  def transaction_params
    params.require(:transaction).permit(:sender, :receiver, :amount, :reference)
  end
end