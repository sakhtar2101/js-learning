const accountId = 144553
let accountEmail = "akhtar@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"


//accountId = 2 //not allowed

console.log(accountId);

accountEmail = "ak@gmail.com"
accountPassword = "67288"
accountCity = "Ranchi"
let accountState;
/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountEmail, accountPassword, accountCity, accountState])
