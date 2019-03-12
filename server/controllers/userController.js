// import mongoose lib
import mongoose from "mongoose"
// Import configured data mgmt tools
import db from "../models/db"
import * as session from "../models/cache/Session"

// Import crypto tools
import bcrypt from "bcrypt"
import uuid from "uuid/v4"
// Declare number of rounds of salting
const saltRounds = 10
// Function to add new user
const addNew = function (userType) {
   return new Promise(function (resolve, reject) {
      try {
         let hidden = bcrypt.hashSync(userType.secret, saltRounds)
         userType.secret = hidden
         let user = db.User.create(userType)
            .then((user) => {
               return resolve({
                  username: user.username,
                  email: user.email
               })
            }).catch((err) => {
               console.log(err)
               return reject(err)
            })
      } catch (err) {
         console.error(err)
         return reject(err)
      }
   })
}
// Function to get existing user AND start a session in redis
const getExisting = function (userType) {
   return new Promise(function (resolve, reject) {
      try {
         db.User.findOne({ username: userType.username }, (err, doc) => {
            if (err) return reject(err)
            bcrypt.compare(userType.secret, doc.secret, (err, same) => {
               if (same) {
                  let sessionID = uuid()
                  let toCache = { user: String(doc._id), session: String(sessionID) }
                  session.start(toCache).then((res) => {
                     console.log(res)
                  }).catch((err) => {
                     throw err
                  })
                  return resolve({ success: same, session: sessionID })
               }
               return reject(err, same)
            })
         })
      } catch (err) {
         return reject(err)
      }
   })
}
// Function to add an atk client ID to the 
const addClient = function (userType) {
   return new Promise(function (resolve, reject) {
      try {
         db.User.findOne({ username: userType.username }, (err, doc) => {
            if (err) return reject(err)
            bcrypt.compare(userType.secret, doc.secret, (err, same) => {
               if (err) return reject(err)
               if (same) {
                  let clientID = uuid()
                  db.User.updateOne({ username: userType.username }, { clientID: clientID }, (err, raw) => {
                     if (err) return reject(err)
                     return resolve(clientID)
                  })
               } else {
                  return reject(new Error("adomer internal: Invalid credentials"))
               }
            })
         })
      } catch (err) {
         return reject(err)
      }
   })
}
// Function to add an application to the service under a user's account
const addApp = function (pbody) {
   return new Promise(function (resolve, reject) {
      try {
         db.User.findOne({ clientID: pbody.cred }, (err, doc) => {
            if (err) return reject(err)
            const toInsert = {
               name: pbody.name,
               user: mongoose.Types.ObjectId(doc._id),
               content: JSON.parse(pbody.content)
            }
            db.App.create(toInsert).then((insertion) => {
               // console.log(insertion)
               doc.apps.push(insertion._id)
               db.User.update({ _id: doc._id }, doc, (err, raw) => {
                  if (err) throw new Error("adomer internal: could not push application to user ref list\n" + err)
                  else if (raw) {
                     return resolve(raw)
                  }
               })
            }).catch(err => {
               throw new Error("adomer internal: could not save application to db.\n" + err)
            })
         })
      } catch (err) {
         return reject(err)
      }
   })
}

const approveReel = function (cred) {
   return new Promise(function (resolve, reject) {
      try {
         db.User.findOne({ clientID: cred }).populate("apps").then(doc => {
            let canReel = appName => {
               let ifNotPresent = false
               for (let h = 0; h < doc.apps.length; h++){
                  if (doc.apps[h].name === appName) {
                     return true
                  }
               }
               return ifNotPresent
            }
         })
      } catch (err) {
         return reject(err)
      }
   })

}

export {
   addNew,
   getExisting,
   addClient,
   addApp,
   approveReel
}