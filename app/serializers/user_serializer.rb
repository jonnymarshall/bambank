class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :first_name, :email, :avatar_url, :first_signin, :balance
end
