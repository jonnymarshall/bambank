Rails.application.routes.draw do
  devise_for :users
  resources :users, only: [:index]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root to: 'pages#index'
  resources :pages, only: [:index]
  resources :transactions, only: [:index, :create]
end
