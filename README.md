# Stella Styling

Experiment to mix sinatra and javascript.

####[Demo](http://vast-journey-2015.herokuapp.com/index.html)
  
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



## Isomorphic React

One of the problems with react, is that the initial load and parsing of the javascript can be slow.  On a modern device this isn't a problem,
but on an older phone, the delay can make for a bad user experience - it appears as though the website has stopped responding.   
The work around for this is to pre render the page using 'isomorphic' react.  For stella, most of the content is pulled dynamically from
 json endpoints.  This content can not be pre-redndered.  However parts of stella can be pre-rendered:  

####[Isomorphic static version](http://vast-journey-2015.herokuapp.com/iso.html)

This works really well on a mobile device and effectively disguises what can be a slow first render.

### Node

Stella uses node to create a pre-rendered version of the site, and embeds this as static content into the page.   


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
and embed this into the index.html and iso.html

## Running in production mode

        rake prod:start
 
This will serve up content from the `dist` folder 
 
[http://localhost:9292/index.html](http://localhost:9292/index.html) 

[http://localhost:9292/iso.html](http://localhost:9292/iso.html)


## Deploying to heroku

        rake deploy:heroku
