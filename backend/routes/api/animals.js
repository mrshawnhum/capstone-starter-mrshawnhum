import { Router } from "express";

const router = Router();

router.get("/test", (_, res) => {
  res.send("<p>Animals router test</p>");
});

export default router;
