const fetch = require('node-fetch');
const {client} = require('../redis-middleware');;

const gitApiUrl = 'https://api.github.com/users';

const getUserSummary = async (username) => {
    // logger to tell wether we are getting res from redis cache or calling API
    console.log('NodeJS API: Calling API', username);
    
    let userInfo = await fetch(`${gitApiUrl}/${username}`);
    userInfo = await userInfo.json();

    // set cache, stringify object and save
    client.set(username, JSON.stringify(userInfo));

    return userInfo;
}

module.exports = {getUserSummary};