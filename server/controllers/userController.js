// Import configured data mgmt tools
import db from "../models/db"
import * as session from "../models/cache/Session"

// Import crypto tools
import bcrypt from "bcrypt"
import uuid from "uuid/v4"

const saltRounds = 10

const addNew = function(userType){
   return new Promise(function (resolve, reject) {
      try {
         let hidden = bcrypt.hashSync(userType.secret, saltRounds)
         userType.secret = hidden
         let user = db.User.create(userType)
            .then((user) => {
               return resolve(user)
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

const getExisting = function(userType) {
   return new Promise(function (resolve, reject) {
      try {
         db.User.findOne({ username: userType.username }, (err, doc) => {
            if (err) return reject(err)
            bcrypt.compare(userType.secret, doc.secret, (err, same) => {
               if (same) {
                  let sessionID = uuid()
                  let toCache = { user: doc._id, session: sessionID }
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

const addClient = function ( userType ) {
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
               }
            })
         })
      } catch (err) {
         return reject(err)
      }
   })
}

export {
   addNew,
   getExisting,
   addClient
}