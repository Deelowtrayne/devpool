module.exports = function (pool, github) {
    async function getUser(){}
    async function register(user) {
        const { username, password } = user;
        const foundUser = awaitgithub.request(`GET /users/${username}`);

        if (!foundUser) {
            return {
                result: 'error',
                message: 'Username not registered on GitHub'
            };
        }


        try {
            const { data } = foundUser;
            //insert data into app database
            await pool.query(
                'insert into users(username, password, full_name, email, \
                avatar, city, active_since, updated_at, public_repos) values \
                ($1, $2, $3, $4, $5, $6, $7, $8, $9)',
                [
                    username,
                    password,
                    data.name,
                    data.email,
                    data.avatar_url,
                    data.location,
                    data.created_at,
                    data.updated_at,
                    data.public_repos
                ]
            );

            return {
                result: 'success',
                message: 'User registered successfully'
            };
        } catch (err) {
            return {
                result: 'error',
                message: err.stack
            };
        }
    }

    async function login(user) { }

    return {
        register,
        login
    };
};
