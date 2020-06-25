const config = require('dotenv');
const express = require('express');
const passportOAuth2 = require('passport-oauth2');
const bodyParser = require('body-parser');
const bookRoutes = require('./server/routes/BookRoutes');
const esPersonRoutes = require('./server/routes/EsPersonRoutes');
const esUserRoutes = require('./server/routes/EsUserRoutes');
const sessionV1 = require('./server/routes/ExpressSessionRoutes');
const expressSession = require('express-session');
const { v4: uuidv4 } = require('uuid');

config.config();

const port = process.env.DEV_PORT || 8000;
const app = express();
var expiryDate = new Date( Date.now() + 60 * 60 * 1000 ); // 1 hour

const sessProd = {
	secret: 'dev esvender',
	name : 'sessionId',
	cookie: {
		maxAge: 60000
	}
};
const sessDev = {
	secret: 'dev esvender',
	name : 'sessionId',
	resave: false,
	saveUninitialized: true,
	cookie: {
		secure: true,
		httpOnly: true,
		domain: 'dev.esvender.com.bo',
		path: '',
		expires:expiryDate,
		maxAge: 60000
	},
	genid: function(req) {
		return uuidv4() // use UUIDs for session IDs
	},
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

if (app.get('env') === 'production') {
	app.set('trust proxy', 1); // trust first proxy
	sess.cookie.secure = true // serve secure cookies
	app.use(expressSession(sessProd))
} else {
	app.use(expressSession(sessDev));
}

// app.use(passportOAuth2.Strategy({
// 		authorizationURL: 'https://dev.esvender.com.bo/oauth2/authorize',
// 		tokenURL: 'https://dev.esvender.com.bo/oauth2/token',
// 		clientID: EXAMPLE_CLIENT_ID,
// 		clientSecret: EXAMPLE_CLIENT_SECRET,
// 		callbackURL: "http://localhost:3000/auth/example/callback"
// 	},
// 	function(accessToken, refreshToken, profile, cb) {
// 		User.findOrCreate({ exampleId: profile.id }, function (err, user) {
// 			return cb(err, user);
// 		});
// 	})
// );

app.use('/api/v1/books', bookRoutes);
app.use('/api/v1/person', esPersonRoutes);
app.use('/api/v1/user', esUserRoutes);
app.use('/api/v1/session', sessionV1);

// when a random route is inputed
app.get('*', (req, res) => res.status(200).send({
	message: 'Welcome to this API.'
}));

app.listen(port, () => {
	console.log(`Server is running on PORT ${port}`);
});

module.exports = app;
