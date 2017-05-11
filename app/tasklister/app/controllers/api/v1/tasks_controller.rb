class Api::V1::TasksController < ApplicationController

  def index
    tasks = Task.all
    render json: tasks
  end

  def create
    list = List.find(params[:list][:id])
    task = list.tasks.create(description: params[:description], priority: params[:priority])
    render json: task
  end

  def destroy
    task = Task.find_by(title: params[:list_title])
    list.clear
  end


end
