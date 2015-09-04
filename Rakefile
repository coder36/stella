desc "Start in production mode"

namespace :prod do
  desc "start in production mode"
  task :start => [:stop,:build] do
    fail 'Starting failed' unless `rackup --env production &>rack.log &`
  end

  desc "build production dist dir"
  task :build do
    system(<<-SCRIPT)
    rm -rf dist
    mkdir -p dist
    jspm bundle-sfx js/main dist/app.js
    ./node_modules/.bin/uglifyjs dist/app.js -m -c -o dist/app.min.js
    cp -r public/img dist/img
    cp -r public/fonts dist/fonts

    SCRIPT

    strip_index_html
  end

end

desc "bootstrap environment"
task :bootstrap do
  system(<<-SCRIPT)
  npm install
  jspm install

  SCRIPT
end


desc "start application"
task :start => :stop do
  fail 'Starting failed' unless `rackup --env test &>rack.log &`
end


desc "stop application"
task :stop do
  `lsof -ti tcp:9292 -sTCP:LISTEN | xargs kill -9`
end


def strip_index_html
  File.open('dist/index.html', 'w') do |out|
    File.open('public/index.html').readlines.each do |line|
      line = '' if line[/config.js/]
      line = '' if line[/system.js/]
      line = '<script src="app.min.js"></script>' if line[/js\/main/]
      out.write(line)
    end
  end
end

desc "deploy to heroku"
namespace :deploy do

  task :heroku => ['prod:build'] do
    root = "/tmp/stella_tmp"
    system(<<-SCRIPT)

    bundle install
    rm -rf #{root}
    mkdir #{root}
    cp -r ./app #{root}
    cp -r ./dist #{root}
    cp -r ./app.rb #{root}
    cp -r ./config.ru #{root}
    cp -r ./Gemfile* #{root}
    cd #{root}
    git init
    git add .
    git commit -m"heroku build"
    heroku login
    git remote add heroku https://git.heroku.com/vast-journey-2015.git
    git push --force heroku master

    SCRIPT

    puts 'Deployed to:'
    puts 'https://vast-journey-2015.herokuapp.com/index.html'

  end

end