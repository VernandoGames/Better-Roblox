const bodyParser = require("body-parser");
const express = require("express");
const cors = require('cors');
const cookieParser = require("cookie-parser");
// This is NOT a cookie logger. This is just used so the
// cookies Roblox is wanting to make on your client
// actually get passed to your client.
// You can look through this code, nothing here logs any Cookies.

const gamesRoutes = require('./routes/games-routes');
const thumbnailRoutes = require('./routes/thumbnails-routes');

const app = express();

module.exports.app = app;
module.exports.API = class API {
    constructor() {
        app.use(bodyParser.json());
        app.use(cors());
        app.use(cookieParser());

        app.use('/games', gamesRoutes);
        app.use('/thumbnails', thumbnailRoutes);
    }
}

const Server = new module.exports.API();

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`API is live on port ${port}`));