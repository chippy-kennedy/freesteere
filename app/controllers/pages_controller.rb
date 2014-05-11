class PagesController < ApplicationController
	before_filter :authenticate

	def home
		render "pages/home"
	end


end


