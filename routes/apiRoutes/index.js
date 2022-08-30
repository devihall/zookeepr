const router = require("express").Router();
const animalRoutes = require("./animalRoutes");

const zookeeperRoutes = router.use(require("./zookeeperRoutes"));
router.use(animalRoutes);

module.exports = router;
