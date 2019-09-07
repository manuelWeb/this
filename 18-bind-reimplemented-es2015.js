// Il est facile d’implémenter `bind()`, c’est d’ailleurs ce que faisait
// Prototype.js avant qu’elle n’intègre la bibliothèque standard avec ES5.

// Version ES2015 (pour le fun, puisque `bind` est déjà là…).
// On tire ici partie de l’opérateur de *rest*…
Function.prototype.myBind = function bind(self, ...partialArgs) {
  const fx = this

  // …là aussi…
  const result = function(...callArgs) {
    // …et ici de l’opérateur (identique) de *spread* !
    return fx.call(self, ...partialArgs, ...callArgs)
  }
  result.displayName = `bound ${fx.name}`

  return result
}

function sayHi(whom1, whom2) {
  console.log(`Salut ${whom1} et ${whom2}, moi c’est ${this.name}`)
}

const elodie = { name: 'Élodie' }
const elodiesHi = sayHi.myBind(elodie, 'Billie')
elodiesHi('Noa') // => 'Salut Billie et Noa, moi c’est Élodie'
