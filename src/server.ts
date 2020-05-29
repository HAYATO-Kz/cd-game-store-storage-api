import express from "express";
var cors = require("cors");
import bodyParser from "body-parser";

//database code
// import { sequelize } from "./sequelize";

//router
import { IndexRouter } from "./controllers/v0/router.index";

(async () => {
  const app = express();
  const port = process.env.PORT || 8070; // default port to listen
  app.use(cors());
  app.use(bodyParser.json());

  app.use("/storage/", IndexRouter);
  // Root URI call
  app.get("/", async (req, res) => {
    res.send("/storage/");
    res.setHeader("Access-Control-Allow-Origin", "*");
  });

  // Start the Server
  app.listen(port, () => {
    console.log(`server running http://localhost:${port}`);
    console.log(`press CTRL+C to stop server`);
  });
})();
