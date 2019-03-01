import express from "express"
import serverConfig from "./middleware"
// import { resolve } from "path";

const app = express()
const PORT = process.env.PORT || 8080
serverConfig.attach(app)

let init = () => {
   return new Promise((resolve, reject) => {
      try {
         app.listen(PORT, (err) => {
            if (err) {
               throw ({ op: false, msg: `server could not listen on port ${PORT}`, port: PORT })
            } else {
               return resolve({ op: true, msg: `server listening on port ${PORT}`, port: PORT })
            }
         })
      } catch (err) {
         return reject(err)
      }

   })

}

export {
   app,
   init
}