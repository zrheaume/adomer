import express from "express"
import * as userController from "../controllers/userController"
const router = express.Router()

router.post("/signup", function (req, res) {
   // res.send("ok")
   userController.addNew(req.body)
      .then(user => res.json(user))
      .catch(err => {
         res.send(err)
      })
})

router.post("/login", function (req, res) {
   if (req.body["secret"] && req.body["username"]) {
      userController.getExisting(req.body)
         .then((user) => {
            res.json({ session: user.session })
         }).catch((err) => {
            res.send(err)
         })
   }
})

router.put("/addClient", function (req, res) {
   userController.addClient(req.body).then((clientID) => {
      res.send(clientID)
   })
})

export default router