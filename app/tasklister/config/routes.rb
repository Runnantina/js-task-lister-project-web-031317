Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :tasks, only: [:index, :create, :destroy]
      resources :lists, only: [:index, :create]
    end
  end
  get 'api/v1/lists/delete/:id', to: "api/v1/lists#destroy"
  
end
