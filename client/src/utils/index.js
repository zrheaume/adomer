import server from "./Server"

const canSubmitSignup = body => {
   // validate username format
   // if (body.username.length > 4 && /^(?:[a-z0-9_]+)$/.test(body.username)) { }
   return (
      (body.username.length > 4 && /^(?:[a-zA-Z0-9_]+)$/.test(body.username)) ? (
         (body.email.length > 5) ? (
            (body.secret.length >= 6 && /^(?:(?:[^\\\/\s\n\r\t\.])+)$/.test(body.secret)) ? (
               (body.secretConf === body.secret) ? ( true ) : ( false )
            ) : ( false )
         ) : ( false )
      ) : ( false )
   )
}

const canSubmitLogin = body => {
   return (
      (body.username.length > 4 && body.secret.length >= 6)
   )
}

export default {
   server,
   canSubmitSignup,
   canSubmitLogin
}