const {supabase} = require('../../config');

const getUserEmail = async (email) => {
  const {data, error} = await supabase
  .from('users')
  .select()
  .eq('email', email)
  .single();

  if (error) {
    throw error
    
  };
  return data;
};


const createUser = async (username, email, passwordHash, userRole, last_login) => {
  const {data, error} = await supabase
  .from('users')
  .insert([{ username, email, password_hash: passwordHash, role: userRole, last_login }]);

  if (error) 
    throw error;
  return data;
};



const updateLastLogin = async (userId) => {
  const {error} = await supabase
  .from('users')
  .update({ last_login: new Date() })
  .eq('id', userId);

  if (error) {
    throw error
  };
};



const getUserId = async (userId) => {
  const {data, error} = await supabase
  .from('users')
  .select()
  .eq('id', userId)
  .single();

  if (error) {
    throw error
  };
  return data;
};


const changeUserPassword = async (userId, newPasswordHash) => {
  const {error} = await supabase
  .from('users')
  .update({password_hash: newPasswordHash})
  .eq('id', userId);

  if (error) {
    return error.message
  };
};

const getUserPass = async (username) => {
    const {data, error} = await supabase 
    .from('users')
    .select()
    .eq("username", username)
    .single()

    if(error) {
      throw error
      };
    return data
}

module.exports = {createUser, updateLastLogin,getUserId,changeUserPassword,getUserEmail, getUserPass};
