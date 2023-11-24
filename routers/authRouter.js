const express = require("express");
const router = express.Router();

class AuthRouter {
  constructor(authController, verifyToken) {
    this.authController = authController;
    this.verifyToken = verifyToken;
  }

  routes = () => {
    router.get("/", this.authController.test);
    // POST - Send magic link to email
    router.post("/login", this.authController.loginUser);
    // GET - Retrieve user email
    router.get("/retrieve-email", this.authController.retrieveEmailFromToken);
    return router;
  };
}

module.exports = AuthRouter;
