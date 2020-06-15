import express from "express";

const app = express();

app.use(({ url }, res) => {
  res.status(404).send(`<p>Sorry can't find the page: ${url}!</p>`);
});

app.listen(3000);
