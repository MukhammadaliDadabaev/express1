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
  const existUser = await User.findOne({ email: req.body.email });
  if (!existUser) {
    console.log("User not found");
    return;
  }

  const isPassEquil = await bcrypt.compare(
    req.body.password,
    existUser.password
  );
  if (!isPassEquil) {
    console.log("Password wrong");
    return;
  }
  console.log(existUser);
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
