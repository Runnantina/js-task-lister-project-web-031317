class Api::V1::ListsController < ApplicationController

  def index
    lists = List.all
    render json: lists
  end

  def create
    # binding.pry
    list = List.find_or_create_by(title: params[:title])
    render json: list
  end

  def destroy
    list = List.find(title: params[:title])
    list.destroy
    render json: {delete: "#{list.id}"}
  end
end
