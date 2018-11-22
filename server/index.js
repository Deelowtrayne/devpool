// import dependancies
const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');
const pg = require('pg');
const keys = require('../config/config');
const axios = require('axios');

// database setup
const Pool = pg.Pool;
const useSSL = process.env.DATABASE_URL ? true : false;
const connectionString =
	process.env.DATABASE_URL ||
	'postgresql://coder:coder123@localhost:5432/devpool';

const pool = new Pool({
	connectionString,
	ssl: useSSL
});

// github api setup
const octokit = require('@octokit/rest')({
	headers: {
		accept: 'application/vnd.github.v3+json'
	},
	baseUrl: 'https://api.github.com',
	agent: undefined
});

octokit.authenticate({
	type: 'token',
	token: keys.github_key
});

// import services
const authService = require('./services/authService')(pool, octokit);
const codewarsService = require('./services/codewars')(pool, axios, keys);

// import routes
const routes = require('./routes/routes')(authService);

// middleware
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(bodyParser.json());
app.use(cors());

// routes setup
app.use('/api/user/register', routes.registerUser);

// port configuration
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`App running on port ${PORT}...`));