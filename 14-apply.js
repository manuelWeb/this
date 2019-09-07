// Function#apply() prend deux arguments : le `this` à utiliser dans le contexte
// d’exécution, et un *array-like* des arguments à passer.  Pratique pour écrire
// du code générique, ne se souciant pas du nombre exact d’arguments, sans pour
// autant nécessiter l’opérateur *spread* (`...`) d’ES2015.

exports.name = 'foutu'

const aurore = { name: 'Aurore' }
const args = ['Elliott', '415', '555', '0126']

function callMeMaybe(whom, area, prefix, line) {
  const tel = `${area}-${prefix}-${line}`
  console.log(`Salut ${whom} moi c’est ${this.name}, appelle-moi au ${tel}`)
  console.log('arguments[3] = ', arguments[3])
}

callMeMaybe.apply(aurore, args)
// => Logue « Salut Elliott moi c’est Aurore, appelle-moi au 415-555-0126 »,
// puis `'0126'`.

// Mais les fonctions fléchées n’ont PAS de contexte, vous vous souvenez ?  Du
// coup, **échec silencieux**, ce qui est très dangereux.

const callMeNever = (whom, area, prefix, line) => {
  const tel = `${area}-${prefix}-${line}`
  console.log(`Salut ${whom} moi c’est ${this.name}, appelle-moi au ${tel}`)
  console.log('arguments[3] = ', arguments[3])
}

callMeNever.apply(aurore, args)
// => Logue « Salut Elliott moi c’est foutu, appelle-moi au 415-555-0126 » (car
// `this` est en fait `exports`), puis le `__filename` pour ce fichier FOURNI
// PAR LA FONCTION D’ENROBAGE COMMONJS!  😨 (Si vous exécutez ça dans Node.js ;
// dans un navigateur, ça devrait carrément planter faute de `arguments`
// résolu.)
