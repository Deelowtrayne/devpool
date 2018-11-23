module.exports = function (pool) {
	async function all() {
		try {
			let res = await pool.query('select * from users');
			return res.rows;
		} catch (err) {
			console.log(err);

		}
	}

	async function one(id) {
		const result = await pool.query('select * from users where id=$1 limit 1', [
			id
		]);
		return result.rows[0];
	}

	return {
		all,
		one
	};
};