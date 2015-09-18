require 'sinatra'
require 'sinatra/json'
require 'net/http'

class App < Sinatra::Base

  series = [

      {
        type: "series",
        name: "Ballers",
        image: "img/ballers-key-art-16x9-10939e1.jpg",
        channel: "skyAtlantic",
        size: "medium",
        video: "http://static.video.sky.com/skyatlantic/2015/08/138903/138903-576p_2000K_H264.mp4",
        description: "Dwayne 'The Rock' Johnson stars as a retired NFL player who is navigating his new life off the field in this new drama from executive producer Mark Wahlberg."
      },
      {
        type: "series",
        name: "You, Me And The Apocalypse ",
        image: "http://dm8eklel4s62k.cloudfront.net/images/small/you-me-and-the-apocalypse-key-art-16x9-e664515.jpg",
        channel: "skyOne",
        size: "medium",
        video: "http://static.video.sky.com/skytvguide/2015/08/138523/138523-360p_800K_H264.mp4",
        description: "You, Me And The Apocalypse is a bold, adrenaline-fuelled comedy drama about the last days of mankind, starring Rob Lowe, Mathew Baynton, Jenna Fischer & Megan Mullally."
      },
      {
        type: "series",
        name: "Aquarius",
        image: "http://dm8eklel4s62k.cloudfront.net/images/small/Aquarius-key-art-16x9-bfe3cee.jpg",
        channel: "skyAtlantic",
        size: "medium",
        video: "http://static.video.sky.com/skyatlantic/2015/08/137805/137805-360p_800K_H264.mp4",
        description: "Cop drama set in 1960's LA starring Golden Globe winner David Duchovny as an undercover cop who’s trying to track a missing 16-year-old, only to find she’s joined a small but growing band of drifters under the sway of an infamous cult leader.",
      },
      {
        type: "series",
        name: "The Flash",
        image: "http://dm8eklel4s62k.cloudfront.net/images/medium/the-flash-s2-key-art-16x9-0d11260.jpg",
        channel: "skyOne",
        size: "medium",
        video_image: "http://dm8eklel4s62k.cloudfront.net/images/medium/the-flash-S2-16x9-f499e74.jpg",
        description: "Having gained a unique power, scientist Barry Allen became masked superhero The Flash. How will he fare in Season 2 of this hit show as Central City comes under fresh threat?"
      }
  ]

  set :public_folder, 'dist' if Sinatra::Base.production?

  get '/series.json' do
    json series
  end

  get '/iso' do
    erb :index
  end

  helpers do
    def render_isomorphic_html
      Net::HTTP.get_response(URI.parse('http://localhost:3000')).body
    end
  end

end
