const passport = require("passport");
require('./localStrategy');
// require('./googleStrategy');// extra 
require('./serializers');

module.exports = (app) => {
  app.use(passport.initialize());
  app.use(passport.session());
};
