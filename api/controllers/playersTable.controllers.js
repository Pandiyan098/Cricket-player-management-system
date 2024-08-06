const {createPlayer,getPlayer,getPlayersList,modifyPlayer,removePlayer} = require('../services/players.service.js');

/**
 * @author: Pandiyan
 * @description: POST new Player
 * @param: {} req.param null
 * @return: {object} res will contain a message, statusCode and error.
 */

const addPlayer = async(req, res) => {
  const {name, age, category, team} = req.body;
  try{
    await createPlayer(name, age, category, team);
    res.status(200).json({
      success: true,
      error: false,
      message: "Player added successfully",
      data: {

      },
      statusCode: 200
    })
  }catch(error){
    res.status(400).json({
      success: false,
      error:{
        errorCode: 400,
        errorMessage: error.message
      },
      message: "Player not inserted",
      data: null,
      statusCode: 400
    })
  }
};


/**
 * @author: Pandiyan
 * @description: GET player 
 * @param: {} req.param (id)
 * @return: {object} res will contain a message, statusCode, error and result (data).
 */

const getSinglePlayer = async(req, res) => {
  const {id} = req.params;
  try{
    const player = await getPlayer(id);
    res.status(200).json({
      success: true,
      error: false,
      message: "Player data fetched",
      data: player,
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
 * @description: GET List Players with limits and offset
 * @param: {} req.param (id)
 * @return: {object} res will contain a message, statusCode, error and result (data).
 */

const listPlayers = async(req, res) => {
  const {category, team, limit = 10, offset = 0} = req.query;
  try{
    const players = await getPlayersList(category, team, parseInt(limit), parseInt(offset));
    res.status(200).json({
      success: true,
      error: false,
      message: "Players fetched successfully",
      data: players,
      statusCode: 200
    })
  }catch(error){
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

/**
 * @author: Pandiyan
 * @description: PUT Update player
 * @param: {} req.param (id)
 * @return: {object} res will contain a message, statusCode and error.
 */

const updatePlayer = async(req, res) => {
  const {id} = req.params;
  const {name, age, category, team} = req.body;
  try{
    await modifyPlayer(id, name, age, category, team);
    res.status(200).json({
      success: true,
      error: false,
      message: "Player details updated",
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
      message: "Player not found",
      data: null,
      statusCode: 400
    });
  }
};

/**
 * @author: Pandiyan
 * @description: DELETE player
 * @param: {} req.param (id)
 * @return: {object} res will contain a message, statusCode, error and result (data).
 */

const deletePlayer = async(req, res) => {
  const {id} = req.params;
  try{
    await removePlayer(id);
    res.status(200).json({
      success: true,
      error: false,
      message: "Player row deleted successfully",
      data: {

      },
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

module.exports = {addPlayer, getSinglePlayer, listPlayers, updatePlayer, deletePlayer};
