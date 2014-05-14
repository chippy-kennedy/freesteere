Site::Application.routes.draw do

  resources :rules

  resources :games

  get 'home', :to => 'pages#home'
  root :to => 'pages#home'

  get 'the310', :to => 'games#the310'

  get 'addRule', :to => 'rules#addRule'

end
