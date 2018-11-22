// import dependancies
const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');
const pg = require('pg');
const axios = require('axios');
// const keys = require('../config/config');


// database setup
const Pool = pg.Pool;
const useSSL = process.env.DATABASE_URL ? true : false;
const connectionString =
	process.env.DATABASE_URL ||
	'postgresql://deelowtrayne:nomawonga@localhost:5432/devpool';

const pool = new Pool({
	connectionString,
	ssl: useSSL
});

// github api setup
const octokit = require('@octokit/rest')({
	timeout: 0,
	headers: {
		accept: 'application/vnd.github.v3+json'
	},
	baseUrl: 'https://api.github.com',
	agent: undefined
});

octokit.authenticate({
	// type: 'token',
	// token: keys.github_key
	type: 'basic',
	username :'deelowtrayne',
	password :'N0m@wonga10250'

});

// import services
const authService = require('./services/authService')(pool, octokit);
const usersService = require('./services/usersService')(pool, octokit);

// import routes
const routes = require('./routes/routes')(authService, usersService);

// middleware
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(bodyParser.json());
app.use(cors());

// const jobs = require('../jobs.json');

// (function storeData() {
// 	//let jobList = JSON.parse(jobs);
// 	let allPromises = [];
// 	for (let job of jobs) {
// 		const {
// 			indeed,
// 			job_description,
// 			Company,
// 			Summary,
// 			wage,
// 			area
// 		} = job;
// 		allPromises.push(
// 			pool.query('insert into jobs(indeed, job_description, company, summary, wage, area) \
// 			values ($1, $2, $3, $4, $5, $6)', [
// 				indeed,
// 				job_description,
// 				Company,
// 				Summary,
// 				wage,
// 				area
// 			])
// 		);

// 		Promise.all(allPromises)
// 		.then(res => console.log(res))
// 		.catch(err => console.log(err.stack));
// 	}
// }());

// routes setup
app.post('/api/users/register', routes.registerUser);
app.get('/api/users/all', routes.getAllUsers);
app.get('/api/users/:username', routes.getUserDetails);
app.get('/api/skills/user/:username', routes.getSkillsOverview);
app.get('/api/challenges/user/:username', routes.getUserChallenges);

// port configuration
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`App running on port ${PORT}...`));
