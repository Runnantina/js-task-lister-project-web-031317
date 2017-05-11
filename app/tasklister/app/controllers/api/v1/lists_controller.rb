class Api::V1::ListsController < ApplicationController

  def index
    lists = List.all
    render json: lists
  end

  def create
    list = List.find_or_create_by(title: params[:list_title])
  end

  def destroy
    list = List.find(title: params[:list_title])
    list.destroy
    render json: {delete: "#{list.id}"}
  end
end
