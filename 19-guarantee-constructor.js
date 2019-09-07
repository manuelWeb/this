// Garantie explicite à la construction par fourniture d’une version *bound*
// dans une *own property*, qui sera donc exploitée en priorité sur la version
// *unbound* présente dans le prototype.
//
// Note : on utilise ici la syntaxe de classes ES2015, mais ça marche tout aussi
// bien « à l’ancienne » avec une fonction constructeur et le remplissage manuel
// du prototype.

class Greeter {
  constructor(name) {
    this.name = name
    // Binding explicite pour chaque instance !  Mais une seule fois pour chaque
    // instance, donc raisonnablement performant.
    this.sayHi = this.sayHi.bind(this)
  }

  // Cette méthode sera donc toujours *bound*.  Ce qui est dommage, c’est que
  // rien à cet endroit du code ne l’indique : en particulier s’il y avait en
  // fait pas mal de code entre le constructeur et ici, on pourrait complètement
  // passer à côté.
  sayHi(whom) {
    console.log(`Salut ${whom} moi c’est ${this.name} !`)
  }
}

const elodie = new Greeter('Élodie')
const elodiesHi = elodie.sayHi
elodiesHi('Anna') // => 'Salut Anna moi c’est Élodie'
