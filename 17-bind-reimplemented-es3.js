// Il est facile d’implémenter `bind()`, c’est d’ailleurs ce que faisait
// Prototype.js avant qu’elle n’intègre la bibliothèque standard avec ES5.

// Version ES3
var slice = Array.prototype.slice

Function.prototype.es3Bind = function bind(self) {
  var fx = this
  var partialArgs = slice.call(arguments, 1)

  var result = function() {
    var callArgs = slice.call(arguments)
    var args = partialArgs.concat(callArgs)
    return fx.apply(self, args)
  }
  result.displayName = `bound ${fx.name}`

  return result
}

function sayHi(whom1, whom2) {
  console.log(`Salut ${whom1} et ${whom2}, moi c’est ${this.name}`)
}

var elodie = { name: 'Élodie' }
var elodiesHi = sayHi.es3Bind(elodie, 'Billie')
elodiesHi('Noa') // => 'Salut Billie et Noa, moi c’est Élodie'
