const {supabase} = require('../../config');

const addPlayer = async (name,age,category,team) => {
  const {data, error} = await supabase
  .from('players')
  .insert([{name, age, category, team}]);
  if (error) {
    return error.message
  };
  return data;
};



const getPlayerById = async (id) => {
  const {data, error} = await supabase
  .from('players')
  .select()
  .eq('id', id)
  .single();
  if (error) {
    return error.message
  };
  return data;
};



const listPlayers = async (category,team,limit,offset) => {
  let {data, error} = await supabase
  .from('players')
  .select()
  .limit(limit)
  //.offset(offset);
  if(error) {
    return error.message
  };
  return data;
};



const updatePlayer = async(id,name,age,category,team) => {
  const {error} = await supabase
  .from('players')
  .update({name, age, category, team})
  .eq('id', id);
  if(error) {
    return error.message
  };
};



const deletePlayer = async(id) => {
  const {error} = await supabase
  .from('players')
  .delete()
  .eq('id', id);
  if(error) {
    return error.message
  };
};

module.exports = { addPlayer, getPlayerById, listPlayers, updatePlayer, deletePlayer };
