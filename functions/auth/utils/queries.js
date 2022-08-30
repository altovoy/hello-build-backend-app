const { dynamoDB } = require("../../../services/dynamodb");

const TableName = process.env.USERS_TABLE;

const findUser = async (userName) => {
  console.log({ userName });
  try {
    const query = {
      TableName,
      KeyConditionExpression: "#userName = :userName",
      ScanIndexForward: false,
      ExpressionAttributeNames: {
        "#userName": "userName",
      },
      ExpressionAttributeValues: {
        ":userName": userName,
      },
    };
    return await dynamoDB.get(query);
  } catch (error) {
    console.log(error);
    throw new Error("Error getting user from dynamoDB");
  }
};

const putUser = ({ userName, password }) => {
  try {
    const query = {
      TableName,
      Item: {
        userName,
        password,
        favoriteRepositories: [],
      },
    };
    return dynamoDB.put(query);
  } catch (error) {
    console.log(error);
    throw new Error("Error inserting user in dynamoDB");
  }
};

module.exports = {
  putUser,
  findUser,
};
