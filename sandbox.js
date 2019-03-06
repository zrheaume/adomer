// sandbox.js
// zach rheaume
// Feb-Mar 2019

// import server module
import * as server from "./server"
// import mongoose connection config to initialize db connection
import "./server/config/mongoose"
// run server module init method 
server.init().then(status => {
   // if operational status returns true 
   if (status.op) {
      // console.log status message
      console.log(status.msg)
   } else { 
      // otherwise, houston, we have a problem
      console.log("oops! something went wrong")
      process.abort()
   }
})