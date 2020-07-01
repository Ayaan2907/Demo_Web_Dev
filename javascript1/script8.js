console.log('hello credential validation')

let mustIncludeUsername = `helllo`;
let mustIncludeEmail = `@balenocafe.com`;
let mustIncludePassword = `%1920`;



let userCheck = function (userName, userEmail, userPassword) {
      if (
            (userName.includes(mustIncludeUsername) && userName.length > 10) &&
            (userEmail.includes(mustIncludeEmail)) &&
            (userPassword.includes(mustIncludePassword && userPassword.length >10) )
      ) {
            console.log(' Hey you are inn...! ')
            return true;

      } else if (
            userName.includes(mustIncludeUsername ) && userName.length > 10 && userEmail.includes(mustIncludeEmail)
       ) {
             console.log(' Plz correct your password...! ')
            return null;

      } else if (userName.includes(mustIncludeUsername)  && userName.length > 10) {
            console.log(' your email is not proper. ');
            return null;

      } else if (userName.includes(mustIncludeUsername) && userName.length > 10 ) {
            console.log(' correct your name plz. ');            
            return null;

      }
      else {
            console.log('  your details are incorrect. ');
            return false;         
      }
}

console.log(userCheck("okfghjkljhgfhelllo", " ok@balenocafe.com", "okpasswordwillbe10charachetrs%1920 "));
