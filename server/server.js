const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({
    users: ["user0ne", "usertwo", "userthree", "userfour"],
  });
});
app.listen(2000, () => {
  console.log("server started on port 2000");
});
