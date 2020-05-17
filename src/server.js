const express = require('express')
const app = express()
const pug = require('pug')
const bodyParser = require("body-parser");
const Config = require('./modules/config.js')
CommonMids = require('./routers/CommonMids.js')

app.use('/public', express.static('./public'))
app.set('views', './views')
app.set('view engine', 'pug')

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

app.use(CommonMids.base)

app.get('/', function (req, res) {
	res.redirect(Config.homeUrl)
})

app.get(Config.homeUrl, function (req, res) {
  	res.render('index', {
  		pagetitle: 'Accueil'
  	})
})

app.listen(3000, function () {
  	console.log(Config.websiteName + ' listening on port 3000!')
})
