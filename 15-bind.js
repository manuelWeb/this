// Function#bind() permet de produire une version dérivée de la fonction avec un
// `this` garanti à vie.

function sayHi(whom) {
  console.log(`Salut ${whom} moi c’est ${this.name}`)
}

const elodie = { name: 'Élodie' }
const elodiesHi = sayHi.bind(elodie)

// `elodiesHi` est associé à vie à l’objet `elodie` qui a été passé en argument
// à `bind` : quel que soit son mode d’appel, c’est ce `this` qui sera utilisé.

elodiesHi('Anna') // => 'Salut Anna, moi c’est Élodie'

const bob = {
  name: 'Bob',
  sayHi: elodiesHi,
}

// La règle « Sujet-Verbe-Complément » n’est plus applicable : l’association
// créée par `bind` est la plus forte.  On verra pourquoi en la réimplémentant.

bob.sayHi('Louise') // => 'Salut Louise, moi c’est Élodie'

const failedRebind = elodiesHi.bind(bob)
failedRebind('Billie') // => 'Salut Billie, moi c’est Élodie'
