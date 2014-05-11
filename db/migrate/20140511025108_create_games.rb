class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.string :name
      t.string :description
      t.string[] :rules
      t.string :icon

      t.timestamps
    end
  end
end
