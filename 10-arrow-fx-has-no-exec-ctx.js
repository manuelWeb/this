// Une fonction fléchée n’a tout simplement pas de contexte d’exécution :
// `this`, `arguments` et les autres sont **résolus lexicalement**, comme
// n’importe quelle variable.

function honeyPot(x, y) {
  // Cette fonction fléchée ira chercher `this` et `arguments` en remontant ses
  // portées, comme pour `console`, `Array`, etc.  C’est la fonction `honeyPot`,
  // étant déclarée avec `function`, qui fournira `this` et `arguments` depuis
  // son propre contexte d’exécution.  Bonjour l’ahurissement au débogage !
  return (a, b) => {
    console.log('this.name =', this.name)
    console.log('arguments =', arguments, Array.from(arguments))
    console.log('a / b     = ', a, '/', b)
  }
}

const subject = {
  name: 'Élodie',
  start: honeyPot,
}
const weirdo = {
  name: 'Weirdo',
  explore: subject.start('foo', 'bar'),
}

weirdo.explore(1, 2)
