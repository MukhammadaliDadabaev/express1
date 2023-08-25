const { Router } = require("express");
const bcrypt = require("bcrypt");
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
  const hashedLogin = await bcrypt.hash(req.body.password, 10);
  const userData = {
    email: req.body.email,
    password: hashedLogin,
  };
  const user = await User.create(userData);
  console.log(user);
  res.redirect("/");
});

router.post("/register", async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const userData = {
    firsName: req.body.firstname,
    lastName: req.body.lastname,
    email: req.body.email,
    password: hashedPassword,
  };
  const users = await User.create(userData);
  console.log(users);
  res.redirect("/");
});

module.exports = router;
