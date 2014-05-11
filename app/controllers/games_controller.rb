class GamesController < ApplicationController
	http_basic_authenticate_with :name => "user", :password => "accidentallylaid"

	def authenticate
    	authenticate_or_request_with_http_basic('Administration') do |username, password|
      	username == 'admin' && password == 'password'
    	end
 	end

	def the310
		@games = Game.all
		render "games/the310"
	end

	def show
		@game = Game.find(params[:id])
		render 'games/show'
	end

	def new
		@game = Game.new
	end

	def create
		@game = Game.create(permitted_params.game)

		if @game.save
			puts "game: #{@game.name} created successfully."
		else
			puts "game: #{@game.name} creation failed."
		end

	end


	def edit 
		@game = Game.find(params[:id])
	end

	def update
		@game = Game.find(params[:id])

  		if @game.update_attributes(permitted_params.game)
  			puts "game: #{@game.name} updated successfully."
  		else
  			puts "game: #{@game.name} updated failed."
  		end
    
	end

	def destroy
    	
    	@game = Game.find(params[:id])
    	@game.destroy

    	puts "Destroyed: #{@game.name} game."
  	end
end


