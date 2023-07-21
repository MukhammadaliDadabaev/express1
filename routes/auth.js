import {
  Router
} from "express";
const router = Router()


router.get('/register', (req, res) => {
  res.render('register', {
    title: "Register | Ali",
    isRegister: true
  })
})

router.get('/login', (req, res) => {
  res.render('login', {
    title: "Login | Ali",
    isLogin: true
  })
})

export default router