# Stella Styling

Experiment to mix sinatra and javascript.
  
  - React 
  
  - JSPM is used to manage and package the javascript.
  
  - Isomorphic React - how does this work in practice ?
  
  - Rack provides an asset pipeline for SASS -> CSS compilation
  
  - Sinatra provides a simple json endpoint to drive the demo app
  
  - Rake pulls it all together
  
  
  
####[Demo](http://vast-journey-2015.herokuapp.com/index.html)
 
<a href="http://vast-journey-2015.herokuapp.com/index.html"><img src="http://raw.githubusercontent.com/coder36/stella/master/public/img/screenshot1.png"/></a>

It's responsive...

<a href="http://vast-journey-2015.herokuapp.com/index.html"><img src="https://raw.githubusercontent.com/coder36/stella/master/public/img/screenshot2.png" width="400px" /></a>


## Dev Setup

        bundle
        rake bootstrap
        rake start

Open [http://localhost:9292/index.html](http://localhost:9292/index.html)


### Ismorphic react

The isomorphic version uses node to pre-render the page.  It's missing a fair bit of content, but on slow mobile devices at least
the user isn't left with an empty page.

Open [http://localhost:9292/iso](http://localhost:9292/iso)

You will see an initial static version of the site, until react takes over client side.  This works best on a mobile.


When running in dev mode, the ES6/2015 javascript is compiled at runtime.

## Production setup

        bundle
        rake bootstrap
        rake prod:build
        
This will create a `./dist` folder with minified veriosn of the javascript.  It will also pre-render a static version of the site,
and embed this into the index.html

## Running in production mode

        rake prod:start
 
[http://localhost:9292/index.html](http://localhost:9292/index.html) will now serve up content from the ./dist folder.  


## Deploying to heroku

        rake deploy:heroku
