class TransactionSerializer
  include FastJsonapi::ObjectSerializer
  attributes :sender, :receiver, :amount, :reference, :created_at
end
