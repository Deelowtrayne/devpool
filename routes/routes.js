module.exports = function(authService, usersService) {
	async function registerUser(req, res, next) {
		const response = await authService.register(req.body);
		res.json(response);
	}

	async function getAllUsers(req, res, next) {
		const response = await usersService.all();
		res.json(response);
    }
    
	async function getUserDetails(req, res, next) {
		const response = await usersService.one(req.params.username);
		res.json(response);
	}

	async function getSkillsOverview(req, res, next) {
		const response = await usersService.skillsOverview(req.params.username);
		res.json(response);
    }
    
	async function getUserChallenges(req, res, next) {
		const response = await usersService.challenges(req.params.username);
		res.json(response);
	}

	return {
        registerUser,
        getAllUsers,
        getUserDetails,
        getSkillsOverview, 
        getUserChallenges
	};
};
