desc "Start in production mode"

namespace :prod do
  desc "start in production mode"
  task :start => [:stop,:build] do
    fail 'Starting failed' unless `rackup --env production &>rack.log &`
  end

  desc "build production dist dir"
  task :build do
    system(<<-SCRIPT)
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