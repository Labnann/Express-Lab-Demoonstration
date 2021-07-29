const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    res.locals.req = req;
    res.locals.res = res;
    next();
  } else {
    req.flash("error", "You do not have access!");
    res.redirect("/users/login");
  }
};
module.exports = ensureAuthenticated;
