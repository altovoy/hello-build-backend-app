const { putUser, findUser } = require("./utils/queries");

const signUpUser = async (req, res) => {
  const { user } = req.body;

  try {
    const findUserResponse = await findUser();
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

module.exports = { signUpUser };
