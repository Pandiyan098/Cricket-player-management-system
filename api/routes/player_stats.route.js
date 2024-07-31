const express = require('express');
const {addStatistics, getStatistic, updateStatistics, deleteStatistics, listStatistics} = require('../controllers/statsTable.controllers');
const authenticate = require('../middlewares/authMiddleware');
const authorize = require('../middlewares/roleMiddleware');

const statsRouter = express.Router();

statsRouter.post("/",authenticate,authorize(["admin", "manager"]),addStatistics);

statsRouter.get("/:playerId",getStatistic);

statsRouter.put("/:id",authenticate,authorize(["admin", "manager"]),updateStatistics);

statsRouter.delete("/:id",authenticate,authorize(["admin"]),deleteStatistics);

statsRouter.get("/",listStatistics);

module.exports = statsRouter;
