class SpeakController < ApplicationController
  def index
    client = Soundcloud.new(:client_id => SOUNDCLOUD_CLIENT_ID)
    @tracks = client.get('/tracks', :limit => 2, :order => 'hottnes')
  end

  def post
  end
end
