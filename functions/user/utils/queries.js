const { dynamoDB } = require("../../../services/dynamodb");
const TableName = process.env.USERS_TABLE;

const updateFavoriteRepositories = async (userName, favoriteRepositories) => {
  try {
    const updateQuery = {
      TableName,
      Key: {
        userName,
      },
      UpdateExpression: "SET favoriteRepositories = :favoriteRepositories",
      ExpressionAttributeValues: {
        ":favoriteRepositories": favoriteRepositories,
      },
    };
    return await dynamoDB.update(updateQuery);
  } catch {
    throw new Error("Error updating favorite repositories on database");
  }
};

module.exports = {
  updateFavoriteRepositories,
};
