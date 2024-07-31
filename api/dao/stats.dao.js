const { supabase } = require('../../config');

const addStatistics = async (player_id, match_id, match_date, runs_scored, wickets_taken, catches, stumpings) => {
  const { data, error } = await supabase
  .from('player_statistics')
  .insert([{ player_id, match_id, match_date, runs_scored, wickets_taken, catches, stumpings }]);
  if (error) {
    return error.message
  };
  return data;
};



const getStatisticsByPlayerId = async (playerId) => {
  const { data, error } = await supabase
  .from('player_statistics')
  .select()
  .eq('player_id', playerId);
  if (error) {
    return error.message
  };
  return data;
};



const updateStatistics = async (id, runs_scored, wickets_taken, catches, stumpings) => {
  const { error } = await supabase
  .from('player_statistics')
  .update({ runs_scored, wickets_taken, catches, stumpings })
  .eq('id', id);
  if (error) {
    return error.message
  };
};



const deleteStatistics = async (id) => {
  const { error } = await supabase
  .from('player_statistics')
  .delete()
  .eq('id', id);
  if (error) {
    return error.message
  };
};



const listStatistics = async (limit, offset) => {
  const { data, error } = await supabase
  .from('player_statistics')
  .select()
  .limit(limit);
  if (error) {
    return error.message
  };
  return data;
};

module.exports = { addStatistics, getStatisticsByPlayerId, updateStatistics, deleteStatistics, listStatistics };
