const {createStatistics, getStatistics, modifyStatistics, removeStatistics, getStatisticsList} = require('../services/stats.servise.js');

/**
 * @author: Pandiyan
 * @description: POST add new statistics
 * @param: {} req.param null
 * @return: {object} res will contain a message, statusCode and error.
 */

const addStatistics = async(req, res) => {
  const {player_id, match_id, match_date, runs_scored, wickets_taken, catches, stumpings} = req.body;
  try{
    await createStatistics(player_id, match_id, match_date, runs_scored, wickets_taken, catches, stumpings);
    res.status(200).json({
      success: true,
      error: false,
      message: "New statistics added successfully",
      data: {

      },
      statusCode: 200
    });
  }catch(error) {
    res.status(400).json({
      success: false,
      error:{
        errorCode: 400,
        errorMessage: error.message
      },
      message: "Failed to insert new Statistics",
      data: null,
      statusCode: 400
    });
  }
};

/**
 * @author: Pandiyan
 * @description: GET statistics
 * @param: {} req.param (playerId)
 * @return: {object} res will contain a message, statusCode, error and result (data).
 */

const getStatistic = async(req, res) => {
  const {playerId} = req.params;
  try{
    const statistics = await getStatistics(playerId);
    res.status(200).json({
      success: true,
      error: false,
      message: "Statistics fetched successfully",
      data: statistics,
      statusCode: 200
    })
  }catch(error){
    res.status(400).json({
      success: false,
      error:{
        errorCode: 400,
        errorMessage: error.message
      },
      message: "Player not found",
      data: null,
      statusCode: 400
    });
  }
};

/**
 * @author: Pandiyan
 * @description: PUT Update Statistics
 * @param: {} req.param (id)
 * @return: {object} res will contain a message, statusCode and error.
 */

const updateStatistics = async (req, res) => {
  const {id} = req.params;
  const {runs_scored, wickets_taken, catches, stumpings} = req.body;
  try{
    await modifyStatistics(id,runs_scored,wickets_taken,catches,stumpings);
    res.status(200).json({
      success: true,
      error: false,
      message: "Statistics updated successfully",
      data: {

      },
      statusCode: 200
    });
  }catch(error){
    res.status(400).json({
      success: false,
      error:{
        errorCode: 400,
        errorMessage: error.message
      },
      message: "Id not found",
      data: null,
      statusCode: 400
    });
  }
};

/**
 * @author: Pandiyan
 * @description: DELETE delete statistics
 * @param: {} req.param (id)
 * @return: {object} res will contain a message, statusCode and error.
 */

const deleteStatistics = async (req, res) => {
  const {id} = req.params;
  try{
    await removeStatistics(id);
    res.status(200).json({
      success: true,
      error: false,
      message: "Statistics deleted successfully",
      data: {

      },
      statusCode: 200
    });
  }catch(error) {
    res.status(400).json({
      success: false,
      error:{
        errorCode: 400,
        errorMessage: error.message
      },
      message: "Statistics not deleted",
      data: null,
      statusCode: 400
    });
  }
};

/**
 * @author: Pandiyan
 * @description: List of statistics with limit and offset 
 * @param: {} req.param null
 * @return: {object} res will contain a message, statusCode, error and result (data).
 */

const listStatistics = async (req, res) => {
  const {limit = 10, offset = 0} = req.query;
  try{
    const statistics = await getStatisticsList(parseInt(limit), parseInt(offset));
    res.status(200).json({
      success: true,
      error: false,
      message: "Statistics fetched successfully",
      data: [{statistics

      }],
      statusCode: 200
    });
  }catch(error) {
    res.status(400).json({
      success: false,
      error:{
        errorCode: 400,
        errorMessage: error.message
      },
      message: "Table not found",
      data: null,
      statusCode: 400
    });
  }
};

module.exports = {addStatistics, getStatistic, updateStatistics, deleteStatistics, listStatistics};
