class Transaction < ApplicationRecord
  belongs_to :sender, class_name: "User", foreign_key: :sender_id
  belongs_to :receiver, class_name: "User", foreign_key: :receiver_id
  after_create :adjust_balances

  scope :for_user, ->(user) { where(sender: user).or(where(receiver: user)) }

  def self.create_bonus_transaction(new_user)
    Transaction.create(
      sender: User.find_by(email: "hello@bambank.com"),
      receiver: new_user,
      amount: 100,
      reference: "Signup Bonus"
    )
  end

  def create_transaction(sender:, receiver:, amount:, reference:)
    Transaction.create(
      sender: sender,
      receiver: new_user,
      amount: amount,
      reference: reference
    )
  end

  private

  def adjust_balances
    self.sender.adjust_balance("deduct", amount)
    self.receiver.adjust_balance("add", amount)
  end
end
