const { findUser } = require("../../utils/user.queries");
const { updateFavoriteRepositories } = require("./utils/queries");

const toggleFavoriteRepository = async (req, res) => {
  const { favoriteId, userName } = req.body;

  try {
    const findUserResponse = await findUser(userName);

    if (findUserResponse.Items.length > 0) {
      let isFavorite = false;
      let { favoriteRepositories = [] } = findUserResponse.Items[0];
      const favoriteRepositoryIndex = favoriteRepositories.findIndex(
        (favoriteRepoId) => (favoriteRepoId === favoriteId)
      );

      if (favoriteRepositoryIndex >= 0) {
        favoriteRepositories.splice(favoriteRepositoryIndex, 1);
      } else {
        favoriteRepositories.push(favoriteId);
        isFavorite = true;
      }
      await updateFavoriteRepositories(userName, favoriteRepositories);
      res.status(200).json({
        message: "Favorites updated",
        favoriteRepositories,
        isFavorite,
      });
    } else {
      res.status(404).json({ message: "Not founded user" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { toggleFavoriteRepository };
