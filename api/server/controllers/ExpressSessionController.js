const ExpressSessionService = require('../services/ExpressSessionService');
const Util = require('../utils/Utils');

const util = new Util();

class ExpressSessionController {

	constructor(hour) {
		this.hour = hour;
	}

	static async accessSession(req, res, next) {
		if (req.session.views) {
			req.session.views++;
			res.setHeader('Content-Type', 'text/html');
			res.write('<p>views: ' + req.session.views + '</p>');
			res.write('<p>expires in: ' + (req.session.cookie.maxAge / 1000) + 's</p>');
			res.end();
		} else {
			req.session.views = 1;
			res.end('welcome to the session demo. refresh!');
		}
	}

	static async regenerateSession(req, res, next) {
		req.session.regenerate(req,function(err) {
			// will have a new session here

		})
	}

	static async destroySession(req, res, next) {
		req.session.destroy(function(err) {
			// cannot access session here
		})
	}

	static async reloadSession(req, res, next) {
		req.session.reload(function(err) {
			// session updated
		})
	}

	static async saveSession(req, res, next) {
		req.session.save(function(err) {
			// session saved
		})
	}

	static async setExpires(req, hour) {
		req.session.cookie.expires = new Date(Date.now() + hour);
		req.session.cookie.maxAge = hour;
	}
}

module.exports = ExpressSessionController;
