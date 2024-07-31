require('dotenv').config();

const {addPlayer, getPlayerById, listPlayers, updatePlayer, deletePlayer} = require('../dao/players.dao');

/**
 * @author: Pandiyan
 * @description: POST create player
 * @param: {} req.param null
 * @return: {object} res will contain a message, statusCode and error.
 */

const createPlayer = async (name, age, category, team) => {
  return addPlayer(name, age, category, team);
};

/**
 * @author: Pandiyan
 * @description: GET player details
 * @param: {} req.param (id)
 * @return: {object} res will contain a message, statusCode, error and result (data).
 */

const getPlayer = async (id) => {
  return getPlayerById(id);
};

/**
 * @author: Pandiyan
 * @description: GET players list
 * @param: {} req.param null
 * @return: {object} res will contain a message, statusCode, error and result (data).
 */

const getPlayersList = async (category, team, limit, offset) => {
  return listPlayers(category, team, limit, offset);
};

/**
 * @author: Pandiyan
 * @description: PUT update player details
 * @param: {} req.param id
 * @return: {object} res will contain a message, statusCode and error.
 */

const modifyPlayer = async (id, name, age, category, team) => {
  return updatePlayer(id, name, age, category, team);
};

/**
 * @author: Pandiyan
 * @description: DELETE player detail
 * @param: {} req.param null
 * @return: {object} res will contain a message, statusCode and error.
 */

const removePlayer = async (id) => {
  return deletePlayer(id);
};

module.exports = {createPlayer,getPlayer,getPlayersList,modifyPlayer,removePlayer};
