# Rake task to generate testing data for use in the development environment


require 'database_cleaner'

namespace :dev do

	task :clean_basic => :environment do
		# clean the database
      	DatabaseCleaner.strategy = :truncation, {:only => %w[users universities enrollments]}
		DatabaseCleaner.start
		DatabaseCleaner.clean
	end

	task :load_games => :environment do
		Game.create(
			name: "twentyoneandover"

			)