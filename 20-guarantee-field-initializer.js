// Garantie implicite par initialiseur de champ.
//
// ATTENTION : cette syntaxe est au stade 3 (juillet 2019) et n’est pour le
// moment disponible que dans v8 (Chrome, Brave, Edge 19+, Node 12+, Electron…)
// et Firefox 69+.  Mais Babel permet de l’utiliser ailleurs.

class Greeter {
  constructor(name) {
    this.name = name
  }

  // Cette méthode sera toujours *bound*, car c’est exactement comme si ce code
  // était présent dans le constructeur, avec l’identifiant `sayHi` préfixé par
  // `this.`.  Ce qui est dommage, c’est que l’intention n’est pas claire :
  // est-ce déclaré ainsi spécifiquement pour garantir le binding, ou par pur
  // copier-coller irréfléchi, comme la peste des `var sayHi = function(whom)` ?
  sayHi = (whom) => {
    console.log(`Salut ${whom} moi c’est ${this.name} !`)
  }
}

const elodie = new Greeter('Élodie')
const elodiesHi = elodie.sayHi
elodiesHi('Anna') // => 'Salut Anna moi c’est Élodie'
