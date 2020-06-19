import cors from "cors";
import express from "express";

import users from "./routes/api/users";

const app = express();
const PORT = 3001;

app.get("/", (_, res) => res.send("Hello World!"));

app.use("/api/users", users);

app.use(
  cors({
    origin: true,
  })
);

app.listen(PORT, () => {
  console.info(`App is listening to http://localhost:${PORT}`);
});
