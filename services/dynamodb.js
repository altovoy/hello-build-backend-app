const AWS = require("aws-sdk");
const dynamoDB = new AWS.DynamoDB.DocumentClient();

const put = (params) =>
  new Promise((resolve, reject) => {
    dynamoDB.put(params, function (error, data) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        resolve(params);
      }
    });
  });

const get = (params) =>
  new Promise((resolve, reject) => {
    dynamoDB.query(params, function (error, data) {
      if (error) {
        console.log("Error", error);
        reject(error);
      } else {
        resolve(data);
      }
    });
  });

const scan = (params) =>
  new Promise((resolve, reject) => {
    dynamoDB.scan(params, function (error, data) {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });

const update = (params) =>
  new Promise((resolve, reject) => {
    dynamoDB.update(params, function (error, data) {
      if (error) {
        console.log("Error", error);
        reject(false);
      } else {
        console.log("dynamodb record updated: ", data);
        resolve(true);
      }
    });
  });

module.exports.dynamoDB = {
  put,
  get,
  update,
  scan,
};
