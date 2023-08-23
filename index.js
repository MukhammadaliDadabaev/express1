const mongoose = require('mongoose')
const express = require('express')
const dotenv = require("dotenv")
const {
  create
} = require('express-handlebars')

// ROUTES
const AuthRouters = require('./routes/auth.js')
const ProductsRoutes = require('./routes/products.js')

const app = express();
const hbs = create({
  defaultLayout: "main",
  extname: "hbs",
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "./views");

app.use(express.static("public"));
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.use(AuthRouters);
app.use(ProductsRoutes);

app.get("/", (req, res) => {
  res.render("index", {
    title: "Best Shop | Ali",
  });
});

app.get("/main", (req, res) => {
  res.render("main", {
    title: "Main | Ali",
    isMain: true,
  });
});

app.get("/add", (req, res) => {
  res.render("add", {
    title: "Add Product | Ali",
    isAdd: true,
  });
});
dotenv.config();

const mongoURI = process.env.MONGO_URL;
const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(mongoURI);
    console.log("Connected to Mongo Successfully!");
  } catch (error) {
    console.log(error, "Ulandi...😎");
  }
};
connectToMongo();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}...!`));