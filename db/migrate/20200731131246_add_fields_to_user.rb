class AddFieldsToUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :first_name, :string
    add_column :users, :avatar_url, :string, :default => "https://utulsa.edu/wp-content/uploads/2018/08/generic-avatar-300x300.jpg"
    add_column :users, :first_signin, :boolean, :default => true
    add_column :users, :balance, :float, :default => 0
  end
end