import express from 'express'
import {
  create
} from 'express-handlebars'

const app = express()
const hbs = create({
  defaultLayout: "main",
  extname: "hbs"
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', './views')


app.get('/', (req, res) => {
  res.render('index')
})

app.get('/main', (req, res) => {
  res.render('main')
})

app.get('/products', (req, res) => {
  res.render('products')
})

app.get('/add', (req, res) => {
  res.render('add')
})

app.get('/register', (req, res) => {
  res.render('register')
})

app.get('/login', (req, res) => {
  res.render('login')
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server is running on port: ${PORT }...!`))