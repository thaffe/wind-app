const fetch = require("node-fetch");
exports.handler = function (event, context, callback) {
  console.log("FECTH", typeof fetch);
  // your server-side functionality
  callback(null, {
    statusCode: 200,
    body: "Hello, World",
  });
};
