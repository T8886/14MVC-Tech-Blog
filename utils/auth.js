// Code is taken from previous activities
const withAuth = (req, res, next) => {
    // Redirect user to login page if not logged in
    if (!req.session.loggedIn) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;