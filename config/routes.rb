Rails.application.routes.draw do
  devise_for :users, controllers: {
    registrations: 'users/registrations'
  }
  resources :users, only: [:index, :show]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root to: 'pages#index'
  resources :pages, only: [:index]
  resources :transactions, only: [:index, :create]
end
