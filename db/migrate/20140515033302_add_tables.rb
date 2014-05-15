class AddTables < ActiveRecord::Migration
  def change
	
	create_table "games", force: true do |t|
    	t.datetime "created_at"
    	t.datetime "updated_at"
    	t.string   "name"
    	t.string   "description"
    	t.string   "icon"
  	end

	  create_table "minigames", force: true do |t|
	    t.datetime "created_at"
	    t.datetime "updated_at"
	  end

	  create_table "rules", force: true do |t|
	    t.datetime "created_at"
	    t.datetime "updated_at"
	    t.integer  "game_id"
	    t.string   "description"
	    t.string   "drink_type"
	  end
  end
end
