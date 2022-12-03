const express = require("express");
const router = express.Router();
const users = require("../controllers/users");

router.post("/login", async function (req, res) {
  try {
    res.json(await users.user_login(req.body.username, req.body.password));
  } catch (err) {
    console.error(err);
  }
});

router.post("/getAddress", async function (req, res, next) {
  try {
    res.json(await users.get_address(req.body.userId));
  } catch (err) {
    console.error(err);
  }
});

router.post("/getEmail", async function (req, res, next) {
  try {
    res.json(await users.get_email(req.body.userId));
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
