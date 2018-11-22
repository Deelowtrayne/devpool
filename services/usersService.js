module.exports = function(pool, axios) {
	async function all() {
		try {
			let res = await pool.query('select * from users');
			return res.rows;
		} catch (err) {
			console.log(err);
		}
	}

	async function one(username) {
		const result = await pool.query(
			'select * from users where username=$1 limit 1',
			[username]
		);
		return result.rows[0];
	}

	async function skillsOverview(username) {
		try {
			let results = await axios.get(
				`https://www.codewars.com/api/v1/users/${username}`
			);
			return results;
		} catch (err) {
			console.log(err);
			return 'Incorrect';
		}
	}

	async function challenges(username) {
		try {
			let results = await axios.get(
				`https://www.codewars.com/api/v1/users/${username}/code-challenges/completed?page=0`
			);
			return results;
		} catch (err) {
			console.log(err);
			return 'Incorrect';
		}
	}

	return {
		all,
		one,
		challenges,
		skillsOverview
	};
};
