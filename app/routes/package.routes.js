const { authJwt } = require("../middlewares");
const controller = require("../controllers/package.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/package/create",
     [authJwt.verifyToken, authJwt.isClient],
    controller.createPackage
  );

  
};
