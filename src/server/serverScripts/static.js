const express = require("express");
const path = require("path");

const quickFiles = {
  "/mod-manager": path.resolve("./src/public/html/modmanager.html"),
  "/downloads": path.resolve("./src/public/html/downloads/download.html"),
  "/account": path.resolve("./src/public/html/account/index.html"),
  "/games": path.resolve("./src/public/html/games/games.html"),
  "/upload": path.resolve("./src/public/html/upload.html"),
  "/testing": path.resolve("./src/public/testing.html"),
  "/login": path.resolve("./src/public/html/account/login.html"),
  "/register": path.resolve("./src/public/html/account/register.html"),
  "/logo/azuritelogo.png": path.resolve(
    "./src/public/assets/images/azuritelogo.png",
  ),
};
/**
 *
 * @param {express.Application} app
 */
module.exports = (app) => {
  app.use(express.static(path.resolve("./src/public")));

  app.use((req, res, next) => {
    if (quickFiles[req.path]) {
      res.sendFile(quickFiles[req.path]);
      return;
    }
    next();
  });
};
