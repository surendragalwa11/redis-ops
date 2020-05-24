const redis = require('redis');

const REDIS_PORT = process.env.REDIS_PORT || 6379;

const client = redis.createClient(REDIS_PORT);

const cache = (req, res, next) => {
    const {username} = req.params;
    client.get(username, (error, data) => {
        if(error) throw error;

        if(!!data) {

            console.log('REDIS: Data found in redis cahce. Returning..');

            return res.status(200).send({
                status: 'success',
                username,
                data: JSON.parse(data),
            });
        } else {
            next();
        }
    })
}

module.exports = {
    cache,
    client,
}

