const { Router } = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const router = Router();

router.get("/register", async (req, res) => {
  res.render("register", {
    title: "Register | Ali",
    isRegister: true,
    registerError: req.flash("registerError"),
  });
});

router.get("/login", async (req, res) => {
  res.render("login", {
    title: "Login | Ali",
    isLogin: true,
    loginError: req.flash("loginError"),
  });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    req.flash("loginError", "All fields is required");
    res.redirect("/login");
    return;
  }

  const existUser = await User.findOne({ email });
  if (!existUser) {
    req.flash("loginError", "User not found");
    res.redirect("/login");
    return;
  }

  const isPassEquil = await bcrypt.compare(password, existUser.password);
  if (!isPassEquil) {
    req.flash("loginError", "Password wrong");
    res.redirect("/login");
    return;
  }
  console.log(existUser);
  res.redirect("/");
});

router.post("/register", async (req, res) => {
  const { firstname, lastname, email, password } = req.body;

  if (!firstname || !lastname || !email || !password) {
    req.flash("registerError", "All register required");
    res.redirect("/register");
    return;
  }

  const candidate = await User.findOne({ email });
  if (candidate) {
    req.flash("registerError", "User alread exist");
    res.redirect("/register");
    return;
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const userData = {
    firsName: firstname,
    lastName: lastname,
    email: email,
    password: hashedPassword,
  };
  const users = await User.create(userData);
  console.log(users);
  res.redirect("/");
});

module.exports = router;
