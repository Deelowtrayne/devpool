const assert = require('assert');
const pg = require('pg');
const AuthService = require('../services/authService');
const keys = require('../../config/config');
const octokit = require('@octokit/rest')();

octokit.authenticate({
	type: 'token',
	token: keys.github_key
});

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

describe('Testa qha', () => {
	it('should return user details object', async () => {
		const auth = new AuthService(pool, octokit);
		assert.equal(
			await auth.register({
				username: 'Deelowtrayne'
			}),
			{
				result: 'success',
				message: 'User registered successfully'
			}
		);
	});
});
