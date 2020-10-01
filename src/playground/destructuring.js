// Object destructuring

// const person = {
//     name: 'Pedro',
//     age: 32,
//     location: {
//         city: 'CDMX',
//         temp: 30
//     }
// }

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}`);

// const { city, temp } = person.location;
// if (city && temp) {
//     console.log(`It's ${temp} in ${city}`);
// }

// const book = {
//     title: 'Harry Potter and the Goblet of Fire',
//     author: 'JK Rowling',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName } = book.publisher;
// console.log(publisherName);

// Array destructuring

const address = ["Circuito Chelem 125", "León", "Guanajuato", "37547"];
// const [street, city, state, zipcode] = address;
const [, city, state = 'New York'] = address;
console.log(`You're in ${city}, ${state}`);

const item = ['Chocolate',"$50MXN","$65MXN","$75MXN"];
const [itemName,,itemMediumPrice] = item;
console.log(`A ${itemName} costs ${itemMediumPrice}`);