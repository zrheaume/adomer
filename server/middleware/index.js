// server/middleware/index.js
// zach rheaume

// import prebuilt middleware libs
import path from "path"
import express from "express"
import logger from "morgan"
// import express routers
import routes from "../routes"
// export default function to attach middleware to an app
export default {
   attach: function (app) {
      // include express json, urlencoded, and morgan logger
      app.use(express.json())
      app.use(express.urlencoded({ extended: true }))
      app.use(logger("combined"))
      // expose client/build/static dir via express static
      app.use("/static", express.static(path.resolve("client/build/static/.")))
      // attach router to app
      app.use(routes)
   }
}