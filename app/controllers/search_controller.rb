class SearchController < ApplicationController
  def index
    @recent_searches = Search.last(10)
    # client = Soundcloud.new(:client_id => SOUNDCLOUD_CLIENT_ID)
    # @tracks = client.get('/tracks', :limit => 2, :order => 'hottnes')
  end

  def post
    Search.create(:term => params[:search][:term], :ip => request.ip)
    redirect_to :action => :index
  end
end
