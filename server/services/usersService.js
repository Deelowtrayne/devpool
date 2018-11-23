module.exports = function(pool) {
	async function all() {
		try {
			let res = await pool.query('select * from users');
			return res.rows;
		} catch (err) {
            console.log(err);
            
        }
	}

	async function one(username) {
		const result = await pool.query('select * from users where username=$1 limit 1', [
			username
		]);
		return result.rows[0];
	}

	return {
		all,
		one
	};
};
