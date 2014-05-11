Site::Application.routes.draw do

  resources :games

  get 'home', :to => 'pages#home'
  root :to => 'pages#home'

  get 'the310', :to => 'games#the310'

end
