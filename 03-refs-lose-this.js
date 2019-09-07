// Si on référence sans appeler, on « perd » le `this`.  Ici, en mode laxiste
// (par défaut), ce sera l’objet global :
//
// - `window` dans une page web
// - `global` dans Node.js
// - `self` dans un Worker

// En portée racine et mode laxiste, `this` est l’objet global. Collons-lui un
// `name` bien défini pour illustrer notre scénario. (`window` a un `name` vide
// par défaut, ce qui n’aide pas à comprendre…)
name = 'foutue'

const alice = {
  name: 'Alice',
  identify() {
    console.log(`Je suis ${this.name}`)
  },
}
const data = [42]

// Copie de référence vers la fonction
const fx = alice.identify
fx() // => 'Je suis foutue'

// Ici c’est le code interne de `forEach` qui appellera son argument le moment
// venu, et cet appel n’est pas « Sujet-Verbe-Complément ».

data.forEach(alice.identify) // => 'Je suis foutue'
