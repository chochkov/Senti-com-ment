class CreateSoundcloudConnects < ActiveRecord::Migration
  def self.up
    create_table :soundcloud_connects do |t|

      t.timestamps
    end
  end

  def self.down
    drop_table :soundcloud_connects
  end
end
