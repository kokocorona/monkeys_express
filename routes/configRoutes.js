const indexR = require("./index");
const usersR = require("./users");
const teamsR = require("./teams");
const foodsR = require("./foods");


exports.routesInit = (app) => {
  app.use("/",indexR);
  app.use("/users",usersR);
  app.use("/teams",teamsR);
  app.use("/foods",foodsR);

}