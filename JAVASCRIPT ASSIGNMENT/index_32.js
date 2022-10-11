// Checking Usernames # 32

var current_users = ["talha", "huzaifa", "rashid", "raza", "haseeb"];
var new_users = ["Uzair", "Talha", "Dawood","RAZA", "Wahab"];

var current_users_lower = current_users.map(x => x.toLowerCase());
console.log(current_users_lower);


var new_users_lower = new_users.map(x => x.toLowerCase());
console.log(new_users_lower);


for (let i = 0; i < new_users_lower.length; i++) {
    if (new_users_lower[i] === current_users_lower[0] || new_users_lower[i] === current_users_lower[1] || new_users_lower[i] === current_users_lower[2] || new_users_lower[i] === current_users_lower[3] || new_users_lower[i] === current_users_lower[4]) {
        console.log("Sorry " + new_users_lower[i] + ", that name is taken.");
    } else {
        console.log("Great, " + new_users_lower[i] + " is available.");
    }

}










