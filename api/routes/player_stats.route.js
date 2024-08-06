const express = require('express');
const {addStatistics, getStatistic, updateStatistics, deleteStatistics, listStatistics} = require('../controllers/statsTable.controllers');
const authenticate = require('../middlewares/authMiddleware');
const authorize = require('../middlewares/roleMiddleware');

const statsRouter = express.Router();

statsRouter.post("/",authenticate,authorize(["Admin", "Manager"]),addStatistics);

statsRouter.get("/:playerId",getStatistic);

statsRouter.put("/:id",authenticate,authorize(["Admin", "Manager"]),updateStatistics);

statsRouter.delete("/:id",authenticate,authorize(["Admin"]),deleteStatistics);

statsRouter.get("/",listStatistics);

module.exports = statsRouter;
