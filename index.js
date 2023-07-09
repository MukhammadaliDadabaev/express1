import express from 'express'
// import path, {
//   dirname
// } from 'path'
// import {
//   fileURLToPath
// } from 'url'
import {
  engine
} from 'express-handlebars'
// const __filename = fileURLToPath(
//   import.meta.url)
// const __dirname = dirname(__filename)

const app = express()

app.engine('hbs', engine())
app.set('view engine', 'hbs')
app.set('views', './views')


app.get('/', (req, res) => {
  res.render('index')
})

app.get('/about', (req, res) => {
  res.render('about')
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server is running on port: ${PORT }...!`))