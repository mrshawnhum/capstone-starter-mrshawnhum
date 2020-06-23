import { Router } from "express";
import { registerUser, loginUser } from "../../db";

const router = Router();

// @route GET api/users/test
// @description tests products route
// @access Public
router.get("/test", (_, res) => {
  res.send("<p>Users router test</p>");
});

router.get("/register", (_, res) => res.send("<p>TEsting register user</p>"));

// @route POST api/users/register
// @description Register a new user
// @access Public
router.post("/register", ({ body }, res) => {
  console.log({ body });
});

// @route POST api/users/authenticate
// @description Authenticate a user
// @access Public
router.post("/authenticate", async (req, res) => {
  res.send(`<p>Trying to authenticate ${req.body}!</p>`);
});

// @route POST api/users/users/login
// @description Login user
// @access Public
router.post("/login", async ({ body }, res) => {
  const results = await loginUser(body);
  if (!results) {
    res.status(403);
  }

  res.json(results);
});

// @route POST api/users/saveSearch
// @description Save a user's searches
// @access Public
router.put("/saveSearch", async (req, res) => {
  res.send(`<p>Trying to save a user's search: ${req.body}!</p>`);
});

export default router;
