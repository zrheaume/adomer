// action routes
// acions =>
   // login
   // signup
   // addClient

import express from "express"
import * as userController from "../controllers/userController"
const router = express.Router()

router.post("/signup", function (req, res) {
   userController.addNew(req.body)
      .then(user => res.json(user))
      .catch(err => {
         res.send(err)
      })
})

router.post("/login", function (req, res) {
   userController.getExisting(req.body)
      .then((user) => {
         res.json({ session: user.session })
      }).catch((err) => {
         res.send(err)
      })
})

router.put("/addClient", function (req, res) {
   userController.addClient(req.body).then((clientID) => {
      res.send(clientID)
   })
})

export default router