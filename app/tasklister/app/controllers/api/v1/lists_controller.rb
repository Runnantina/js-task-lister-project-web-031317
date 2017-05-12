class Api::V1::ListsController < ApplicationController

  def show
    render json: {animals: ['orca', 'dolphin']}
  end

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
    list = List.find(params[:id])
    list.destroy
    render json: {delete: "#{list.id}"}
    # render json: {animals: ['orca', 'dolphin']}
  end
end
