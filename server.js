import React from 'react'
// we'll use this to render our app to an html string
import { renderToString } from 'react-dom/server'
// and these to match the url to routes and then render
import { match, RouterContext } from 'react-router'
import routes from './app/config/routes'

var express = require('express')
var path = require('path')
var compression = require('compression')

var app = express()

app.use(compression())
// serve static stuff
app.use(express.static(path.join(__dirname, 'app', 'public')))

//send all requests to index.html
app.get('*', (req, res) => {

	match({routes: routes, location: req.url }, (err, redirect, props) => {
		match({ routes: routes, location: req.url }, (err, redirect, props) => {
		    // in here we can make some decisions all at once
		    if (err) {
		      // there was an error somewhere during route matching
		      res.status(500).send(err.message)
		    } else if (redirect) {
		      // we haven't talked about `onEnter` hooks on routes, but before a
		      // route is entered, it can redirect. Here we handle on the server.
		      res.redirect(redirect.pathname + redirect.search)
		    } else if (props) {
		      // if we got props then we matched a route and can render
		      const appHtml = renderToString(<RouterContext {...props}/>)
		      res.send(renderPage(appHtml))
		    } else {
		      // no errors, no redirect, we just didn't match anything
		      res.status(404).send('Not Found')
		    }
		  })
	})

})

function renderPage(appHtml) {
  return `
    <!doctype html public="storage">
    <html>
    <meta charset=utf-8/>
    <title>React Project</title>
    <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/js/bootstrap.min.js">
    <div id=app>${appHtml}</div>
    <script src="bundle.js"></script>
   `
}

var PORT = process.env.PORT || 8080
app.listen(PORT, function(){

	console.log('Production Express server running at localhost:' + PORT)
})