// Le contexte d’exécution est défini dynamiquement **au moment de l’appel** et
// comprend 4 identifiants libres (*“free variables”*) :
//
// 1. `this` : le « contexte »
// 2. `arguments` : une instance de `Arguments` contenant les arguments passés
// 3. `super` (ES2015+) : pour l’appel aux versions héritées de nos « méthodes »
// 4. `new.target` (ES2015+) : indique l’argument éventuel lors de notre
//    instanciation.

function exploreES3Context(a, b) {
  console.log('this.name =', this.name)
  console.log('arguments =', arguments, Array.from(arguments))
  console.log('a / b     = ', a, '/', b)

  // En mode laxiste, la liaison entre `a`/`b` et `arguments` est vivante !
  // Quelle idée pourrie !
  a = 42
  arguments[1] = 21
  console.log('arguments =', arguments, Array.from(arguments))
  console.log('a / b     = ', a, '/', b)
}

const subject = {
  name: 'Élodie',
  explore: exploreES3Context,
}

exploreES3Context(1, 2)
console.log('-'.repeat(72))
subject.explore(3, 4)
