class TransactionsController < ApplicationController
  protect_from_forgery with: :null_session
  skip_before_action :verify_authenticity_token
  before_action :authenticate_user!

  def index
    render json: TransactionSerializer.new(current_user.all_transactions.order(created_at: :desc))
  end

  def create
    transaction = Transaction.new(parse_params_to_transaction(transaction_params))
    if transaction.save
      render json: TransactionSerializer.new(current_user.all_transactions)
    else
      render json: { error: transaction.errors.messages }, status: 422
    end
  end

  private

  def parse_params_to_transaction(transaction_params)
    {
      sender: User.find(transaction_params[:senderId].to_i),
      receiver: User.find(transaction_params[:senderId].to_i),
      reference: transaction_params[:reference],
      amount: transaction_params[:amount]
    }
  end

  def transaction_params
    params.permit(:senderId, :receiverId, :reference, :amount)
  end
end