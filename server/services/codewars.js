module.exports = function (pool, axios, keys) {
    async function getUser(username){
        try{
            let results = await axios.get(`https://www.codewars.com/api/v1/users/${username}`);
            console.log('results');
            return results;

        } catch(err) {
            console.log(err);
            return 'Incorrect'
        }
    }

    async function getUserChallenges(username){
        try{
            let results = await axios.get(`https://www.codewars.com/api/v1/users/${username}/code-challenges/completed?page=0`);
            console.log('results');
            return results;

        } catch(err) {
            console.log(err);
            return 'Incorrect'
        }
    }

    return {
        getUser,
        getUserChallenges
    }
}