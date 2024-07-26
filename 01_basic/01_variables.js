const accountId = 12345
let accountEmail = "vidhi@123.com"
var accountPassword = '12345'
accountCity = "jaipur"
let accountState;
// accountId = 2 // not allowed

 accountEmail = "vid@123.com"
 accountPassword = '111'
 accountCity = "pune"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functions scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])