// action routes
// acions =>
// login
// logout
// signup
//

import express from "express"
import * as userController from "../controllers/userController"
import * as session from "../models/cache/Session"
const router = express.Router()

router.get("/details/:session", (req, res) => {
   // res.send("ok!")
   session.use(req.params.session).then((data) => {
      let toClient = {
         username: data.username,
         apps: data.apps
      }
      res.json(toClient)
   })
})

router.get("/apps/:name", (req, res) => {
   console.log(req.params.name)
   console.log(req.headers.cred)
   res.send("ok")
})

router.post("/apps", (req, res) => {
   // console.log(req.body)
   userController.addApp(req.body).then(raw => {
      res.send("ok!")
   }).catch(err => {
      res.send(err)
   })
})

export default router