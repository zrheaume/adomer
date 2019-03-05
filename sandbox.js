import * as server from "./server"
import "./server/config/mongoose"

server.init().then(status => {
   if (status.op) {
      console.log(status.msg)
   } else { 
      console.log("oops!")
   }
})