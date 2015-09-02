require 'sinatra'
require 'sinatra/json'

class App < Sinatra::Base

  shows = [

      { id: "a0",
        type: "info",
        title: "Welcome Back",
        content: "manage your account and discover all you can get as a Sky customer"
      },

      { id: "a1",
        type: "show",
        name: "Ballers",
        image: "img/ballers-key-art-16x9-10939e1.jpg",
        channel: "skyAtlantic",
        size: "medium",
        video: "http://static.video.sky.com/skyatlantic/2015/08/138903/138903-576p_2000K_H264.mp4",
        description: "Dwayne 'The Rock' Johnson stars as a retired NFL player who is navigating his new life off the field in this new drama from executive producer Mark Wahlberg."
      },
      { id: "a2", type: "show", name: "Hannibal", image: "img/Hannibal-16x9.jpg", channel: "skyLiving", size: "small" },
      { id: "a3", type: "show", name: "True Detective", image: "img/True-Detective-Colin-16x9.jpg", channel: "skyAtlantic", size: "small"},
      { id: "a4", type: "show", name: "Guitar Star", image: "img/Guitar-Star-16x9.jpg", channel: "skyArts", size: "small"},
      { id: "a5", type: "show", name: "Veep", image: "img/Veep-16x9.jpg", channel: "skyAtlantic", size: "medium" },
  ]

  set :public_folder, 'dist' if Sinatra::Base.production?

  get '/tiles.json' do
    json shows
  end


end
