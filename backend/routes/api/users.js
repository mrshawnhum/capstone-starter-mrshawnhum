import { getAllUsers } from "db";

import { Router } from "express";

const router = Router();

// @route GET api/users/test
// @description tests products route
// @access Public
router.get("/test", (_, res) => {
  res.send("<p>Users router test</p>");
});

// @route POST api/users/register
// @description Register a new user
// @access Public
router.post("/register", async (req, res) => {
  res.send(`<p>Trying to register a ${req.body}!</p>`);
});

// @route POST api/users/authenticate
// @description Authenticate a user
// @access Public
router.post("/authenticate", async (req, res) => {
  res.send(`<p>Trying to authenticate ${req.body}!</p>`);
});

// @route POST api/users/saveSearch
// @description Save a user's searches
// @access Public
router.put("/saveSearch", async (req, res) => {
  res.send(`<p>Trying to save a user's search: ${req.body}!</p>`);
});

export default router;
