require './app'
require "sprockets"
require "sprockets-sass"
require "sass"
require 'compass'


map '/assets' do
    sprockets = Sprockets::Environment.new
    sprockets.append_path 'app/assets/stylesheets'
    run sprockets
end

map '/' do
  run App
end
