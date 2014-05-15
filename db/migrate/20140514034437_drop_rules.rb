class DropRules < ActiveRecord::Migration
  def up
    drop_table :rules
  end

  def down
    create_table :rules do |t|
      t.string :table_column
      t.references :anothertable

      t.timestamps        
    end
    add_index :rules, :anothertable_id
  end
end