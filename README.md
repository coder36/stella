# Stella Styling

Experiment to mix sinatra and nodejs.
  
  - JSPM is used to manage and package the javascript.
  
  - Rack provides an asset pipeline for SASS -> CSS compilation
  
  - Sinatra provides a simple json endpoint to drive the demo app
  
  - Rake pulls it all together

## Dev Setup

        bundle
        rake bootstrap
        rake start

Open [http://localhost:9292/index.html](http://localhost:9292/index.html)

When running in dev mode, the ES6/2015 javascript is compiled at runtime.

## Production setup

        bundle
        rake bootstrap
        rake prod:build
        
This will create a `./dist` folder with minified veriosn of the javascript.

## Running in production mode

        rake prod:start
 
[http://localhost:9292/index.html](http://localhost:9292/index.html) will now serve up content from the ./dist folder.  

