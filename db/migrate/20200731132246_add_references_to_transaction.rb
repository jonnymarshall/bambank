class AddReferencesToTransaction < ActiveRecord::Migration[6.0]
  def change
    add_reference :transactions, :sender, foreign_key: { to_table: :users }
    add_reference :transactions, :receiver, foreign_key: { to_table: :users }
  end
end
