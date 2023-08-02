import express from "express";
import { create } from "express-handlebars";
import AuthRouters from "./routes/auth.js";
import ProductsRoutes from "./routes/products.js";

const app = express();
const hbs = create({
  defaultLayout: "main",
  extname: "hbs",
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));

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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}...!`));
