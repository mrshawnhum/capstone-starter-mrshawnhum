import express from "express";
import { getAllUsers } from "./db/index.js";
import petClient from "./test.mjs";

const app = express();
const PORT = 5000;

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(PORT, () => {
  console.log(`App is listening to http://localhost:${port}`);
});

(async () => {
  console.log(await getAllUsers());
})();

//console.log(petClient);
