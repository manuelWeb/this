// *First-class functions* et références sur fonctions.

function sayHi(whom) {
  console.log(`Salut ${whom} !`)
}

// Les fonctions sont des valeurs comme les autres : on peut les référencer
// comme n’importe quelle autre valeur, sans nécessairement les appeler.
sayHi
// La fonction ne s’exécute pas.
// => sayHi(whom) { … } (Function)

sayHi('Élodie') // => 'Salut Élodie !'

// ------------------------------------------------------

// Qui dit référence dit valeur comme une autre…  Les fonctions étant des
// objets, elles sont copiées par référence : ici, `greet` et `sayHi`
// référencent **la même fonction** en mémoire.
const greet = sayHi
greet('Maxence') // => 'Salut Maxence !'

const calls = []
calls.push([sayHi, 'Elliott'])
calls.push([greet, 'Louise'])
calls.push([greet, 'Anna'])

for (const [fx, whom] of calls) {
  // Loguera successivement les 3 saluts… Ici `fx` référence en fait la même
  // fonction en mémoire que `greet` ou `sayHi` : on a simplement copié la
  // référence à chaque fois (en constituant les tableaux passés à `push` puis
  // en déstructurant au sein du `for…of`).
  fx(whom)
}
