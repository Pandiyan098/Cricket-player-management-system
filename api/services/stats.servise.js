require('dotenv').config();

const {addStatistics,getStatisticsByPlayerId,updateStatistics,deleteStatistics,listStatistics} = require('../dao/stats.dao');

/**
 * @author: Pandiyan
 * @description: POST create new statistics
 * @param: {} req.param null
 * @return: {object} res will contain a message, statusCode and error.
 */

const createStatistics = async (player_id, match_id, match_date, runs_scored, wickets_taken, catches, stumpings) => {
  return addStatistics(player_id, match_id, match_date, runs_scored, wickets_taken, catches, stumpings);
};


/**
 * @author: Pandiyan
 * @description: GET statistics
 * @param: {} req.param (playerId)
 * @return: {object} res will contain a message, statusCode, error and result(data).
 */

const getStatistics = async (playerId) => {
  return getStatisticsByPlayerId(playerId);
};

/**
 * @author: Pandiyan
 * @description: PUT update statistics 
 * @param: {} req.param (id)
 * @return: {object} res will contain a message, statusCode, error and result (data).
 */

const modifyStatistics = async (id, runs_scored, wickets_taken, catches, stumpings) => {
  return updateStatistics(id, runs_scored, wickets_taken, catches, stumpings);
};

/**
 * @author: Pandiyan
 * @description: DELETE statistics
 * @param: {} req.param (id)
 * @return: {object} res will contain a message, statusCode, error and result (data).
 */

const removeStatistics = async (id) => {
  return deleteStatistics(id);
};

/**
 * @author: Pandiyan
 * @description: GET list statistics
 * @param: {} req.param null
 * @return: {object} res will contain a message, statusCode, error and result (data).
 */

const getStatisticsList = async (limit) => {
  return listStatistics(limit);
};

module.exports = {createStatistics, getStatistics, modifyStatistics, removeStatistics, getStatisticsList};
