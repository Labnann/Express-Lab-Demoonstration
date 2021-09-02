const getRegister = (req, res) => {
  res.sendFile("register.html", { root: "./views/users" });
};

const postRegister = (req, res) => {
  res.redirect("/dashboard");
};

const getLogin = (req, res) => {
  const { id, username } = req.query;
  res.send(
    `user with ID - ${id} and Username - ${username} is requesting to login.`
  );
};

const getDashboard = (req, res) => {
  res.send(`User Dashboard`);
};

module.exports = { getRegister, postRegister, getLogin, getDashboard };
