const signUp = require('../controllers/auth/signUp');
const login = require('../controllers/auth/login');
const contact = require('../controllers/contact/contact');
const checkauth = require('../middleware/check_auth');

module.exports = (app) => {
    app.use('/signUp', signUp);
    app.use('/login', login);
    app.use('/contact', checkauth, contact);
}