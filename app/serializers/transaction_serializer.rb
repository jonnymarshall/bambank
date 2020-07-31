class TransactionSerializer
  include FastJsonapi::ObjectSerializer
  attributes :sender, :receiver, :amount, :reference
end
