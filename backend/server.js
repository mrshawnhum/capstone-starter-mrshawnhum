import cors from "cors";
import express from "express";

import animals from "./routes/api/animals";

import { getAllUsers } from "./db/index.js";
import petClient from "./test.mjs";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => res.send("Hello World!"));

app.use("/api/animals", animals);

app.use(
  cors({
    origin: true,
  })
);

app.listen(PORT, () => {
  console.log(`App is listening to http://localhost:${PORT}`);
});

(async () => {
  console.log(await getAllUsers());
})();

//console.log(petClient);
