/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
function objectProperties(someObj) {
    someObj = this.firstName;
    someObj = this.lastName;
    someObj = this.address;
    someObj = this.city;
}

let user = {
    firstName:  "Johny",
    lastName:   "Comelately",
    address:    "12702 BB Downs",
    city:       "Tampa, FL"
};

// Log object properties using for-in loop
let x = "";
for (x in user) {
    console.log(user[x] + " "); 
}