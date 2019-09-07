// Function#bind() permet aussi l’application partielle, c’est-à-dire le
// pré-remplissage des premiers arguments de l’appel.

function sayHi(whom1, whom2) {
  console.log(`Salut ${whom1} et ${whom2}, moi c’est ${this.name}`)
}

const elodie = { name: 'Élodie' }
const elodiesHi = sayHi.bind(elodie, 'Anna')

elodiesHi('Billie') // => 'Salut Anna et Billie, moi c’est Élodie'
