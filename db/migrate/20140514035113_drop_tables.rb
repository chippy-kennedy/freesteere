class DropTables < ActiveRecord::Migration
  def up
    drop_table :tables
  end

  def down
    create_table :tables do |t|
      t.string :table_column
      t.references :anothertable

      t.timestamps        
    end
    add_index :tables, :anothertable_id
  end
end