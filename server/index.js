// server/index.js
// zach rheaume

// Main express module

// Import express
import express from "express"
// import middleware/index.js
import serverConfig from "./middleware"

// decalare app to be the express http handler function
const app = express()
// declare port to be environment port or, if none exists, 8080
const PORT = process.env.PORT || 8080
// attach server config to app
serverConfig.attach(app)

// declare server initialization function
const init = () => {
   // rnp + tab
   return new Promise((resolve, reject) => {
      try {
         // try express.listen on PORT
         app.listen(PORT, (err) => {
            if (err) {
               // reject a bad status log if an error occurs in startup
               return reject(new Error({ op: false, msg: `server could not listen on port ${PORT}`, port: PORT }))
            } else {
               // return a good status log if all is well
               return resolve({ op: true, msg: `server listening on port ${PORT}`, port: PORT })
            }
         })
      } catch (err) {
         // reject any uncaught exception
         return reject(err)
      }

   })

}
// export app and init
export {
   app,
   init
}