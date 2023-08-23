const {
  Router
} = require("express");

const router = Router()


router.get('/products', (req, res) => {
  res.render('products', {
    title: "Products | Ali",
    isProduct: true
  })
})

module.exports = router