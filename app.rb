require 'sinatra'
require 'sinatra/json'

class App < Sinatra::Base

  shows = [
      { name: "Veep", image: "img/Veep-16x9.jpg", channel: "skyAtlantic" },
      { name: "True Detective", image: "img/True-Detective-Colin-16x9.jpg", channel: "skyAtlantic"},
      { name: "Guitar Star", image: "img/Guitar-Star-16x9.jpg", channel: "skyArts"}
  ]

  set :public_folder, 'dist' if Sinatra::Base.production?

  get '/tiles.json' do
    json shows.shuffle
  end


end
