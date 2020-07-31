class Transaction < ApplicationRecord
  belongs_to :sender, class_name: "User", foreign_key: :sender_id
  belongs_to :receiver, class_name: "User", foreign_key: :receiver_id

  scope :for_user, ->(user) { where(sender: user).or(where(receiver: user)) }
end
