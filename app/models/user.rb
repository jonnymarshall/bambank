class User < ApplicationRecord
  has_many :sender_transactions, class_name: "Transaction", foreign_key: :sender_id
  has_many :receiver_transactions, class_name: "Transaction", foreign_key: :receiver_id

  has_many :transactions, ->(user) { where(Transaction.for_user(user)) }

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  
end