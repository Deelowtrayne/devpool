const assert = require('assert');
const axios = require('axios');
const codewars = require('../services/codewars')('yima', axios, 'no');
describe('Testa qha', () => {
    it('should return user details object', async () => {
        assert.equal(await codewars.getUser('Deelowtrayne'), 'Incorrect');
        console.log(await codewars.getUser('Deelowtrayne'));
        // assert.equal(await codewars.scores('Deelowtrayne'), 'Correct');
    });

 
    
});