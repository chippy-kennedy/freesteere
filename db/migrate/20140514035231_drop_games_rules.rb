class DropGamesRules < ActiveRecord::Migration
  def up
    drop_table :games_rules
  end

  def down
    create_table :games_rules do |t|
      t.string :table_column
      t.references :anothertable

      t.timestamps        
    end
    add_index :games_rules, :anothertable_id
  end
end