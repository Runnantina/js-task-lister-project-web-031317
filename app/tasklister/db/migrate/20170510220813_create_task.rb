class CreateTask < ActiveRecord::Migration[5.0]
  def change
    create_table :tasks do |t|
      t.string :description
      t.string :priority
      t.integer :list_id
    end
  end
end
