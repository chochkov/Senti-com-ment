class CreateMusicmetricConnects < ActiveRecord::Migration
  def self.up
    create_table :musicmetric_connects do |t|

      t.timestamps
    end
  end

  def self.down
    drop_table :musicmetric_connects
  end
end
