require 'sinatra'
require 'sinatra/json'

class App < Sinatra::Base

  shows = [
      { name: "Hannibal", image: "img/Hannibal-16x9.jpg", channel: "skyLiving", size: "medium" },
      { name: "True Detective", image: "img/True-Detective-Colin-16x9.jpg", channel: "skyAtlantic", size: "small"},
      { name: "Guitar Star", image: "img/Guitar-Star-16x9.jpg", channel: "skyArts", size: "small"},
      { name: "Veep", image: "img/Veep-16x9.jpg", channel: "skyAtlantic", size: "small" },
      { name: "True Detective", image: "img/True-Detective-Colin-16x9.jpg", channel: "skyAtlantic", size: "small"},
  ]

  set :public_folder, 'dist' if Sinatra::Base.production?

  get '/tiles.json' do
    json shows
  end


end
