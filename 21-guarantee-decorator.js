// Garantie explicite par décorateur.
//
// ATTENTION : cette syntaxe est au stade 2 (juillet 2019) et n’est pour le
// moment disponible dans aucun moteur JS.  Il vous faut la transpiler avec
// Babel, ou l’utiliser directement dans TypeScript.
//
// Pour tester ce code, faites un `npm install` dans le dossier qui le contient,
// puis lancez la commande `npm run demo:autobind`.

const autobind = require('autobind-decorator').default

class Greeter {
  constructor(name) {
    this.name = name
  }

  // Cette méthode sera donc toujours *bound*.  C’est mon approche préférée :
  // elle est colocalisée avec la déclaration, l’intention est explicite et la
  // performance optimale.
  @autobind
  sayHi(whom) {
    console.log(`Salut ${whom} moi c’est ${this.name} !`)
  }
}

const elodie = new Greeter('Élodie')
const elodiesHi = elodie.sayHi
elodiesHi('Anna') // => 'Salut Anna moi c’est Élodie'
