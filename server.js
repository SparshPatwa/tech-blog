const express = require('express');
const routes = require('./controllers/index.js');
const sequelize = require('./utils/connect');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
const path = require('path');

const hbs = exphbs.create({ helpers });
const app = express();
const PORT = process.env.PORT || 3001;
const session = require('express-session');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'session_secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
    checkExpirationInterval: 15 * 60 * 1000, // Cleanup expired sessions
    expiration: 5 * 60 * 1000 // expires after 5 minutes of inactivity
  })
};

app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening at http://localhost:3001'));
}).catch(err => console.log(err))