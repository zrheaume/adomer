import axios from "axios"
export default {
   get: {
      details(sessionID) {
         return new Promise(function (resolve, reject) {
            try {
               axios.get(`/api/details/${String(sessionID)}`).then((res) => {
                  if (res.data) {
                     console.log(res.data)
                     return resolve(res.data)
                  }
               })
            } catch (err) {
               return reject(err)
            }
         })
      }
   },
   post: {
      signup(body) {
         return new Promise(function (resolve, reject) {
            try {
               console.log("creating new user")
               axios.post("/act/signup", body).then((res) => {
                  return resolve(res.data)
               }).catch((err) => {
                  return reject(err)
               })
            } catch (err) {
               return reject(err)
            }
         })
      },
      login(body) {
         return new Promise(function (resolve, reject) {
            try {
               console.log("getting existing user")
               axios.post("/act/login", body)
                  .then((res) => {
                     let sessionID = res.data.session
                     window.sessionStorage.setItem("SID", sessionID)
                     let sidChk = window.sessionStorage.getItem("SID")
                     if (sidChk === sessionID) {
                        return resolve(true)
                     } else {
                        return resolve(false)
                     }
                  })
                  .catch((err) => {
                     return reject (err)
                  })
            } catch (err) {
               return reject(err)
            }
         })
      }
   }
}