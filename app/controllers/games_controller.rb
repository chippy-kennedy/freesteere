class GamesController < ApplicationController
	http_basic_authenticate_with :name => "user", :password => "accidentallylaid"

	def authenticate
    	authenticate_or_request_with_http_basic('Administration') do |username, password|
      	username == 'admin' && password == 'password'
    	end
 	end

	def the310
		render "games/the310"
	end

end
