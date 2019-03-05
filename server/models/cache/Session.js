import redisClient from "../../config/redis"
import db from "../db"

const start = function (sessionObj) {
   return new Promise(function (resolve, reject) {
      try {
         redisClient.set(sessionObj.session, sessionObj.user, (status) => {
            if (status === "OK") {
               setTimeout(() => {
                  redisClient.del(sessionObj.session, (deleted) => {
                     if (deleted === 1) {
                        return true
                     } else {
                        throw new Error("CacheError: Client session could not be deleted.")
                     }
                  }, (1000))
               })
            }
         })
      } catch (err) {
         throw new Error("CacheError: Client session could not be deleted.")
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