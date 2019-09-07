// Function#call() fonctionne comme un appel normal, mais précise d’abord le
// `this` à utiliser dans le contexte d’exécution.

exports.zomg = 'OH NOES!'

const aurore = { name: 'Aurore' }

function sayHi(whom) {
  console.log(`Salut ${whom} moi c’est ${this.name}`)
  console.log('arguments[0] = ', arguments[0])
}

sayHi.call(aurore, 'Elliott')
// => Logue « Salut Elliott moi c’est Aurore » puis `'Elliott'`

// Mais les fonctions fléchées n’ont PAS de contexte, vous vous souvenez ?  Du
// coup, **échec silencieux** avec `this` à `undefined`, ce qui est très
// dangereux.

const greet = (whom) => {
  console.log(`Salut ${whom} moi c’est ${this.name}`)
  console.log('arguments[0] = ', arguments[0])
}

greet.call(aurore, 'Elliott')
// => Logue « Salut Elliott moi c’est undefined », puis `{ zomg: 'OH NOES!' }`,
// car `this` comme arguments[0] sont en fait l’interface d’export du module
// FOURNIE PAR LA FONCTION D’ENROBAGE COMMONJS! 😨 (Si vous exécutez ça dans
// Node.js ; dans un navigateur, ça devrait carrément planter faute de
// `arguments` résolu.)
