class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :first_name, :email, :avatar_url, :first_signin, :balance
end
