const express = require('express');

const router = express.Router();

const {cache} = require('../redis-middleware');
const {getUserSummary} = require('./service');

router.get('/repositories/:username', cache, async (req, res) => {
    try {
        const {username} = req.params;
        const repositories = await getUserSummary(username);
        return res.status(200).send({
            status: 'success',
            username,
            data: repositories,
        });
    } catch(error) {
        return res.status(500).send({
            status: 'error',
            error: error.message,
        });
    }

});

module.exports = router;