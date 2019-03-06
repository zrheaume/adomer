// server/models/cache/Session.js
// zach rheaume

// [[ FYI I'm not certain this really belongs with models. May move to server/controllers ]]

// import connected redisClient from config
import redisClient from "../../config/redis"
// import db models
import db from "../db"

// session.start method
// takes an object in the form of { session: [[uuidv4]], user: [[db.User._id]] }
const start = function (sessionObj) {
   return new Promise(function (resolve, reject) {
      try {
         // set the session id as the key and the user db id as the value
         redisClient.set(String(sessionObj.session), sessionObj.user, (status) => {
            // if successful,
            if (status === "OK") {
               // set a 10 minute timeout to delete that from the cache
               setTimeout(() => {
                  redisClient.del(sessionObj.session, (deleted) => {
                     if (deleted === 1) {
                        return true
                     } else {
                        process.abort(new Error("CacheError: Client session could not be deleted."))
                     }
                  }, (600000))
               })
               // and if all goes well, return true
               return resolve(true)
            }
         })
      } catch (err) {
         //if something goes wrong, reject it
         return reject(new Error("CacheError: Client session encountered an error"))
      }
   })
}

const use = function (sessionID) {
   return new Promise(function (resolve, reject) {
      try {
         redisClient.get(sessionID, (err, reply) => {
            if (err) return reject(err)
            db.User.findById(reply).populate("apps").then(res => {
               return resolve(res)
            }).catch(err => {
               return reject(err)
            })
         })
      } catch (err) {
         throw new Error("CacheError: Client session could not be located.")
      }
   })
}

export {
   start, use
}