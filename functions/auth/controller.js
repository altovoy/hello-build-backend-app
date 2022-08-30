const { putUser, findUser } = require("./utils/queries");

const signUpUser = async (req, res) => {
  const { user } = req.body;

  try {
    const findUserResponse = await findUser(user.userName);
    if (findUserResponse.Items.length > 0) {
      res.status(409).json({ message: "User already exists" });
    } else {
      await putUser(user);
      res.status(200).json({ message: "User already created" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const loginUser = async (req, res) => {
  const { user } = req.body;

  try {
    const findUserResponse = await findUser(user.userName);
    if (findUserResponse.Items.length > 0) {
      if (user.password === findUserResponse.Items[0].password) {
        res.status(200).json({ message: "User access granted" });
      } else {
        res.status(401).json({ message: "Incorrect password" });
      }
    } else {
      res.status(404).json({ message: "User is not on our system" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { signUpUser, loginUser };
