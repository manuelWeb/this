function getEnv(key, defaultValue) {
  const result = process.env[key]
  return result == null ? defaultValue : result
}

// console.log( getEnv('NODE_ENV', 'development') );

function exploreES3Context(a, b) {
  console.log('this.name = ', this.name)
  console.log('arguments = ', arguments, Array.from(arguments))
  console.log('a / b = ', a, '/', b)

  a = 42
  arguments[1] = 21
  console.log('arguments = ', arguments, Array.from(arguments))
  console.log('a / b = ', a, '/', b)
}

const subject = {
  name: 'Elodie',
  explore: exploreES3Context
}

// exploreES3Context(1, 2)
// console.log('-'.repeat(72));
// subject.explore(3, 4)

// ########################################################################

const course = {
  heading: 'Javascript: this is it',
  runDumbCampaign() {
    // ceci fonctionne avec appel sujet.verbe.complement
    console.log(`Notre dernier cours : “${this.heading}“ vient de sortir !`);

    setTimeout(function () {
      // ici c'est un callback par définition une fn passé par référence donc pas de this automatique
      // this.heading renvoi un joli "undefined". this vaut l'objet global qui n'a pas de propriété heading
      console.log(`function normale Notre dernier cours : “${this.heading}“ vient de sortir !`);
    }, 0)

    setTimeout(() => {
      // this est bien heading car la fn FLÉCHÉE n'a pas de perimétre ni aruments ni super ni this mais son propre this dans la porté courante sinon dans le code conteneur.
      console.log(`function => Notre dernier cours : “${this.heading}“ vient de sortir !`)
    }, 0)
  }
}
// course.runDumbCampaign()

function honeyPot(x, y) {
  // la fn fléchée ci desous ira chercher le this et arguments en remontant ces portés
  return (a, b) => {
    console.log(`this.name: ${this.name}`);
    console.log('arguments: ', arguments, ` Array.from(arguments): ${Array.from(arguments)}`);
    console.log(`a/b: ${a}/${b}`);
  }
}
const subject_ = {
  name: 'Élodie',
  start: honeyPot
}

const weirdo = { // weirdo = bizzare
  name: 'weirdo',
  explore: subject_.start('foo', 'bar'),
}

weirdo.explore(1, 2) // le this.name sera Élodie le premier en vigeur