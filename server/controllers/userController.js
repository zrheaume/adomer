import mongoose from "mongoose"

// Import configured data mgmt tools
import db from "../models/db"
import * as session from "../models/cache/Session"

// Import crypto tools
import bcrypt from "bcrypt"
import uuid from "uuid/v4"

const saltRounds = 10

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

const getExisting = function (userType) {
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
                  return reject( new Error("adomer internal: Invalid credentials"))
               }
            })
         })
      } catch (err) {
         return reject(err)
      }
   })
}

const addApp = function ( pbody ) {
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

export {
   addNew,
   getExisting,
   addClient,
   addApp
}