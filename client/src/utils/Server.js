import axios from "axios"
export default {
   get: {
      details(sessionID) {
         return new Promise(function (resolve, reject) {
            try {
               axios.get(`/api/details/${sessionID}`).then((res) => {
                  if (res.data) {
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
                     window.location.href = `/home`
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