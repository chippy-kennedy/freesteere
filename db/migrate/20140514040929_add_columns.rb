class AddColumns < ActiveRecord::Migration
  def change
  	
  	add_column :games, :name, :string
  	add_column :games, :description, :string
  	add_column :games, :icon, :string

  	
  	add_column :rules, :description, :string
  	add_column :rules, :drink_type, :string
  end
end

