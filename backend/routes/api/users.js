import { Router } from "express";

const router = Router();

router.get("/test", (_, res) => {
  res.send("<p>Users router test</p>");
});

router.get("/users", async (_, res) => {});

export default router;
