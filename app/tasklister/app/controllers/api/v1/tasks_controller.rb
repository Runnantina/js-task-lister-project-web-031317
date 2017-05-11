class Api::V1::TasksController < ApplicationController

  def index
    tasks = Task.all
    render tasks.as_json
    ActiveRecord::Base.include_root_in_json = true
  end

  def create
    list = List.find_or_create_by(title: params[:list_title])
    task = list.tasks.create(description: params[:description], priority: params[:priority])
    render json: task
  end

  def destroy
    task = Task.find_by(title: params[:list_title])
    list.clear
  end


end
