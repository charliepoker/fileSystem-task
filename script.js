const fs = require("fs");

const request = require("request");

request.get("http://jsonplaceholder.typicode.com/posts", (err, res, body) => {
  if (err) {
    return console.dir(err);
  }
  fs.writeFileSync("./result/posts.json", body);
});
