import express from "express";
import appRouter from "./routes/app.route";
import {create} from "express-handlebars";
import path from "path";

const app = express();

app.set("views", path.join(__dirname, "/views"));
    app.engine(
      ".hbs",
      create({
        layoutsDir: path.join(app.get("views"), "layouts"),
        partialsDir: path.join(app.get("views"), "partials"),
        defaulLayout: "main",
        extname: ".hbs",
      }).engine
    );
    app.set("view engine", ".hbs");


app.use(appRouter);

console.log(path.join(__dirname, "/views"))

export default app;