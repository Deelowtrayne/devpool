const assert = require('assert');
const pg = require('pg');
const AuthService = require('../services/authService');
const UsersService = require('../services/usersService');
const keys = require('../../config/config');
const octokit = require('@octokit/rest')({
	timeout: 0,
	headers: {
		accept: 'application/vnd.github.v3+json'
	},
	baseUrl: 'https://api.github.com',
	agent: undefined
});

octokit.authenticate({
	type: 'basic',
	// token: keys.github_key
	username: 'deelowtrayne',
	password: 'N0m@wonga10250'
});

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

describe('Testa qha', () => {
	beforeEach(async () => {
		await pool.query('delete from users');
	});
	
	const auth = new AuthService(pool, octokit);
	const users = new UsersService(pool);

	it('should be able to successfully register a user', async () => {
		assert.deepEqual(
			await auth.register({
				username: 'Deelowtrayne',
				password: 'coder123'
			}),
			{
				result: 'success',
				message: 'User registered successfully'
			}
		);
	});

	it('should be able to get registered users', async () => {
		
		// add users
		auth.register({
			username: 'Deelowtrayne',
			password: 'coder123'
		});

		auth.register({
			username: 'Elihle',
			password: 'cod3r123'
		});

		auth.register({
			username: 'lilobar',
			password: 'coder@123'
		});

		assert.equal(await users.all(), []);
	});

	after(async () => {
		await pool.end();
	});
});
