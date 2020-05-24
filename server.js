const express = require('express');

const app = express();

// initialize routes
require('./routes')(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('App is running on port', PORT);
})