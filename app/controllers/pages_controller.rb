class PagesController < ApplicationController
  respond_to :html, :json
  before_action :authenticate_user!

  def index
    respond_to do |format|
      format.html
      format.json {
        render json: fetch_transactions(transations_params)
      }
    end 
  end

  private

  def fetch_transactions(type)
  end

  def transations_params
    # params.permit...
  end
  
end