const router = require("express").Router();

const routes = ["users", "comments", "songs", "session"];

for (let route of routes) {
  router.use(`/${route}`, require(`./${route}`));
}

module.exports = router;
