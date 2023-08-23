const {
  Router
} = require("express");
const router = Router();

router.get("/register", (req, res) => {
  res.render("register", {
    title: "Register | Ali",
    isRegister: true,
  });
});

router.get("/login", (req, res) => {
  res.render("login", {
    title: "Login | Ali",
    isLogin: true,
  });
});

router.post("/login", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

router.post("/register", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router