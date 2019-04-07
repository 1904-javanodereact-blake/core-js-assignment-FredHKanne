/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

// object literal
let Chipotle = {city: 'Tampa', name: 'Chipotle', cuisine: 'Mexican', rating: '5'};

// constructor function
function Restaurant1(city, name, cuisine, rating) {
    this.city = city;
    this.name = name;
    this.cuisine = cuisine;
    this.rating = rating;
  }
  
  let Chiles = new Restaurant1('Tampa','Chiles','TexMex',5);
  
// ES6 constuctor to create object
class Restaurants2 {
    constructor(city, name, cuisine, rating) {
        this.city = city;
        this.name = name;
        this.cuisine = cuisine;
        this.rating = rating;
    }
}
  
let McDonalds = new Restaurants2('Tampa','McDonalds','Fast Food',5);

// logging objects created
console.log('\n');
console.log(Chipotle.city);
console.log(Chipotle.name);
console.log(Chipotle.cuisine);
console.log(Chipotle.rating);

console.log('\n');
console.log(Chiles.city);
console.log(Chiles.name);
console.log(Chiles.cuisine);
console.log(Chiles.rating);

console.log('\n');
console.log(McDonalds.city);
console.log(McDonalds.name);
console.log(McDonalds.cuisine);
console.log(McDonalds.rating);




