class Users::RegistrationsController < Devise::RegistrationsController
  skip_before_action :verify_authenticity_token
  protect_from_forgery with: :null_session
  
  def update
    if resource.update(first_signin: false)
      render json: UserSerializer.new(resource)
    else
      render json: { error: resource.errors.messages }, status: 422
    end
  end

  protected

  def update_resource(resource, params)
    # Require current password if user is trying to change password.
    return super if params["password"]&.present?

    # Allows user to update registration information without password.
    resource.update_without_password(params.except("current_password"))
  end
end