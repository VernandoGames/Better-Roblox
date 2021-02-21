const bodyParser = require("body-parser");
const express = require("express");
const serveStatic = require('serve-static')
const path = require('path')
// const cors = require('cors');

const app = express();

module.exports.app = app;

const gamesRoutes = require('./routes/games-routes');
const thumbnailRoutes = require('./routes/thumbnails-routes');

app.use(bodyParser.json());
// app.use(cors()) // for cross-origin rebasing. (development only)

app.use('/api/games', gamesRoutes);
app.use('/api/thumbnails', thumbnailRoutes);

// Configure dist to serve app files
app.use('/', serveStatic(path.join(__dirname, '/dist')))

// this * route is to serve project on different page routes except root `/`
app.use(/.*/, function (req, res) {
    res.sendFile(path.join(__dirname, '/dist/index.html'))
})

// startup server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App is live on port ${port}`))