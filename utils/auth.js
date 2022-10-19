// Code is taken from previous activities
const withAuth = (req, res, next) => {
    // Redirect user to login page if not logged in
    if (!req.session.logged_in) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;