import path from "path"
import express from "express"
import routes from "../routes"
import logger from "morgan"
export default {
   attach : function(app){
      app.use(express.json())
      app.use(express.urlencoded({ extended: true }))
      app.use(logger("combined"))
      app.use("/static", express.static(path.resolve("client/build/static/.")))
      app.use(routes)
   }
}