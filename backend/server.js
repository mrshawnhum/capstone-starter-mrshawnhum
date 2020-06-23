import cors from "cors";
import express from "express";

import users from "./routes/api/users";

const app = express();
const PORT = 3001;

app.use(cors());

app.get("/", (_, res) => res.send("Hello World!"));

app.use(express.json());

app.use("/api/users", users);

app.listen(PORT, () => {
  console.info(`App is listening to http://localhost:${PORT}`);
});
