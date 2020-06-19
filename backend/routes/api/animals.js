import { Router } from "express";

const router = Router();

router.get("/test", (_, res) => {
  res.send("<p>Animals router test</p>");
});

// router.get("/animals", async (_, res) => {
//   res.json(await getAnimals());
// });

export default router;
