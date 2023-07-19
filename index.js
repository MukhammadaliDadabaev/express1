import express from 'express'
import {
  create
} from 'express-handlebars'
import AuthRouters from './routes/auth.js'
import ProductsRoutes from './routes/products.js'

const app = express()
const hbs = create({
  defaultLayout: "main",
  extname: "hbs"
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', './views')

app.use(AuthRouters)
app.use(ProductsRoutes)

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/main', (req, res) => {
  res.render('main')
})

app.get('/add', (req, res) => {
  res.render('add')
})


const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server is running on port: ${PORT }...!`))