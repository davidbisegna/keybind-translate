const Config = require('../modules/config.js')
var CommonMids = function() {}

CommonMids.prototype.base = (req, res, next) => {
	res.locals.startTime = new Date()
	res.locals.websiteName = Config.websiteName
	next()
}

module.exports = new CommonMids()