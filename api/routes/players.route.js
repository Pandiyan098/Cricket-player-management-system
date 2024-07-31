const express = require('express');
const {addPlayer, getSinglePlayer, listPlayers, updatePlayer, deletePlayer} = require('../controllers/playersTable.controllers');
const authenticate = require('../middlewares/authMiddleware');
const  authorize = require('../middlewares/roleMiddleware')

const playerRoute = express.Router();

playerRoute.post("/",authenticate,authorize(["Admin","Manager"]),addPlayer);

playerRoute.get("/:id",getSinglePlayer);

playerRoute.get("/",listPlayers);

playerRoute.put("/:id",authenticate,authorize(["Admin","Manager"]),updatePlayer);

playerRoute.delete("/:id",authenticate,authorize(["Admin"]),deletePlayer);

module.exports = playerRoute;
