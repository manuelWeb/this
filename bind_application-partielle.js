// Function#bind() permet aussi l'application partielle,
// c'est à dire le pré-remplissage des premiers arguments de l'appel

function sayHi(whom, whom2) {
  console.log(`Hello ${whom} et ${whom2} c'est ${this.name}`);
}

const elodie = { name: 'Élodie', greet: sayHi }
const bob = { name: 'Bob', greet: elodie.greet }
// on bind la fn sayHi à elodie (this.name = Élodie) mais aussi le premier argument
const elodieSayHi = sayHi.bind(elodie, 'Marc')

elodieSayHi('John')

// bind ne fonctionne pas sur les fn fléchées
const sayHiArrow = (whom, whom2) => {
  console.log(`Hello ${whom} et ${whom2} c'est ${this.name}`);
}

const sayHiArrowElodie = sayHiArrow.bind(elodie, 'Jean');

sayHiArrowElodie('Max') // Hello Jean et Max c'est undefined
console.log('-'.repeat(72));
elodie.greet('Maxime', 'Marc')
bob.greet('Maxime', 'Marc')
