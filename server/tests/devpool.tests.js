const assert = require('assert');
const AuthService = require('../services/authService');
const keys = require('../../config/config');
const octokit = require('@octokit/rest')();

octokit.authenticate({
	type: 'token',
	token: keys.github_key
});

describe('Testa qha', () => {
	it('should return user details object', async () => {
		const auth = new AuthService('Yima', octokit);
		assert.equal(
			await auth.register({
				username: 'Deelowtrayne'
			}),
			{}
		);
	});
});
