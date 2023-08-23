const {
  Router
} = require("express");
const User = require("../models/User");
const router = Router();

router.get("/register", async (req, res) => {
  res.render("register", {
    title: "Register | Ali",
    isRegister: true,
  });
});

router.get("/login", async (req, res) => {
  res.render("login", {
    title: "Login | Ali",
    isLogin: true,
  });
});

router.post("/login", async (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

router.post("/register", async (req, res) => {
  const userData = {
    firsName: req.body.firstname,
    lastName: req.body.lastname,
    email: req.body.email,
    password: req.body.password
  }
  const users = await User.create(userData)
  console.log(users);
  res.redirect("/");
});

module.exports = router