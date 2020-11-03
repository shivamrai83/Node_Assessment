const express = require("express");
const app = express();
const db = require("./database/db");
const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;
const { blogController } = require("./controller/blogController");
const { blogAuthentication } = require("./controller/blogAuth");
const { bookmarkController } = require("./controller/bookmarkController");
const { KEY, filterUser } = require("./utility/token");
const { userTable } = require("./database/db");
require('dotenv').config()


const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = KEY;

passport.use(
  new JwtStrategy(options, async function (payload, done) {
    const user = await userTable.findOne({ id: payload.id });

    if (!user) {
      done(null, false);
    }
    done(null, filterUser(user));
  })
);
app.use(express.json());
app.use(express.urlencoded());
app.use(passport.initialize());

blogController(app);
blogAuthentication(app);
bookmarkController(app);

db.initalise().then(console.log).catch(console.log);

app.listen(3000, () => console.log(`Server is Running...`));
