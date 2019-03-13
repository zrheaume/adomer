import express from "express"
import * as userController from "../controllers/userController"
import * as session from "../models/cache/Session"
const router = express.Router()

// Route for retrieving data for the existing browser session
router.get("/details/:session", (req, res) => {
   session.use(req.params.session).then((data) => {
      let toClient = {
         username: data.username,
         apps: data.apps
      }
      res.json(toClient)
   })
})

// Route for storing an app's atkData and adding to user's apps
router.post("/apps", (req, res) => {
   userController.addApp(req.body).then(raw => {
      res.send("ok!")
   }).catch(err => {
      res.send(err)
   })
})

// Route for updating an existing app's atkData
router.get("/apps/reel/:appName", (req, res) => {
   userController.approveReel(req.headers.cred).then(canReel => {
      if (canReel(req.params.appName)[0]) {
         res.send(canReel(req.params.appName)[1])
      }
   }).catch(err => {
      res.send("OH NO")
   })
})

export default router