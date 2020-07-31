class AddFieldsToUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :first_name, :string
    add_column :users, :avatar_url, :string
    add_column :users, :bonus_redeemed, :boolean, :default => false
    add_column :users, :balance, :float
  end
end