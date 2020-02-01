exports.zomg = 'OH NOES!'

const aurore = {
  name: 'Aurore'
}
const max = {
  name: 'Maxime'
}

// fn traditionnelle elle a son propre this et arguments
function sayHi(whom) {
  console.log(`Salut ${whom} je suis ${this.name}`);
  console.log('arguments[0]: ', arguments[0]);
}

console.log(this); // revoie { zomg: 'OH NOES!' }

sayHi(aurore, 'Elliott')
// Salut [object Object] je suis undefined
// arguments[0]:  { name: 'Aurore' }

// fn.call(thisArg, arg1, arg2...)
sayHi.call(aurore, 'Helliott')
sayHi.call(max, 'Helliott')
console.log('-'.repeat(72));
// pour la fn greet elle n'a pas son environeemnt d'appel dédié
// donc pas son propre this ni arguments
const greet = (whom) => {
  console.log(`Salut ${whom} je suis ${this.name}`);
  console.log('arguments[0]: ', arguments[0]);
}

greet('Manuel')
greet.call(aurore, 'Manuel')
greet('Johne')
greet.call(max, 'Johne')