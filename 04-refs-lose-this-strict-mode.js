// Si on référence sans appeler, on « perd » le `this`.  Ici, en mode strict
// (opt-in), ce sera `undefined`, ce qui est beaucoup plus utile pour faire du
// *fail fast* et trouver la cause de l’erreur.

'use strict'

const alice = {
  name: 'Alice',
  identify() {
    console.log(`Je suis ${this.name}`)
  },
}

const fx = alice.identify
const data = [42]
safeRun(fx) // => TypeError: cannot read property 'name' of undefined

// Ici c’est le code interne de `forEach` qui appellera son argument le moment
// venu, et cet appel n’est pas « Sujet-Verbe-Complément ».

safeRun(() => data.forEach(alice.identify)) // => Même TypeError

// ---------------------------------

function safeRun(fx) {
  try {
    fx()
  } catch (err) {
    console.error(`${err.constructor.name}: ${err.message}`)
  }
}
