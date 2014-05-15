class DropGames < ActiveRecord::Migration
  
  def up
    drop_table :games
  end

  def down
    create_table :games do |t|
      t.string :games
      t.references :anothertable

      t.timestamps        
    end
    add_index :game, :anothertable_id
  end
 
end
