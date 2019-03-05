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
   session.use(req.params.session).then((data) => {
      let toClient = {
         username: data.username,
         apps: data.apps
      }
      res.json(toClient)
   })
})

router.post('/apps', (req, res) => {
   // console.log(req.body)
   userController.addApp(req.body)
   res.send("ok!")
})

export default router