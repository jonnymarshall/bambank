class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?
  skip_before_action :verify_authenticity_token
  protect_from_forgery with: :null_session
  respond_to :html, :json

  private

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:first_name, :avatar_url])
    devise_parameter_sanitizer.permit(:account_update, keys: [:first_name, :avatar_url])
  end
end
