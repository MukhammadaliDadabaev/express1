import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import {
  create
} from "express-handlebars";

// ROUTES
import AuthRouters from "./routes/auth.js";
import ProductsRoutes from "./routes/products.js";
dotenv.config()

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

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}, () => console.log("MongoDB connect...👍"));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}...!`));

// mongodb+srv://alidev:<password>@cluster0.xgqjd8f.mongodb.net/?retryWrites=true&w=majority