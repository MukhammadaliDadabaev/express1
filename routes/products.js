import {
  Router
} from "express";
const router = Router()


router.get('/products', (req, res) => {
  res.render('products', {
    title: "Products | Ali",
    isProduct: true
  })
})

export default router