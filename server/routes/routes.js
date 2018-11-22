module.exports = function (authService) {
    async function registerUser(req, res, next) {
        const response = await authService.register(req.body);
        res.json(response);
    }

    

    return {
        registerUser
    }
}