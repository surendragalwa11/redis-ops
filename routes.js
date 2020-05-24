const express = require('express');
const git = require('./git/controller');

module.exports = function(app) {
    app.use(express.json());
    app.use('/git', git);
}