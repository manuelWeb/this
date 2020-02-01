//https://cours-video.delicious-insights.com/courses/javascript-this-is-it/102201-garantir-un-this-donne/321765-reimplementer-bind
// réinplémentation de la fn bind en es3 (1999)
var slice = Array.prototype.slice

Function.prototype.es3Bind = function bind(self) {
  // garder une ref sur la fn originale
  var fx = this
  // self garder une ref sur this quand on appel la fonction d'origine

  // saussissonage des arguments pour grader l'application parteille
  // 1 car c'est 0 = this
  var partialArgs = slice.call(arguments, 1)

  // on renvoir la fn que l'on va utiliser
  var result = function () {
    var callArgs = slice.call(arguments);
    var args = partialArgs.concat(callArgs);
    return fx.apply(self, args)
  }
  // sert au débugage
  result.displayName = `bound ${fx.name}`
  return result;
}

function sayHi(whom, whom2, ...rest) {
  const lesautre = rest.join(', ')
  console.log(`Hello ${lesautre}, ${whom} et le dernier mais pas des moindres ${whom2} c'est ${this.name}`);
}

var elodie = { name: 'Élodie' }
var elodieSayHi = sayHi.es3Bind(elodie, 'Johne')

var test = sayHi.bind(elodie, 'Marco', 'Polo')

elodieSayHi('Marc')
test('Jean', 'Eric')