class User < ApplicationRecord
  has_many :sender_transactions, class_name: "Transaction", foreign_key: :sender_id
  has_many :receiver_transactions, class_name: "Transaction", foreign_key: :receiver_id

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  
  def all_transactions
    Transaction.for_user(self)
  end

  def apply_bonus
    Transaction.create_bonus_transaction(self)
    self.update(bonus_redeemed: true)
  end
end