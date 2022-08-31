const axios = require("axios");
const fetchGithubUser = async (userName) => {
  try {
    return await axios.get(`${GIT_API_URI}/users/${userName}`);
  } catch (error) {
    throw new Error("Github user not isset, try with another");
  }
};

module.exports = {
  fetchGithubUser,
};
