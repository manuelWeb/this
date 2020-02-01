// https://cours-video.delicious-insights.com/courses/javascript-this-is-it/102201-garantir-un-this-donne/321761-bind
function sayHi(whom) {
  console.log(`Salut ${whom} moi c'est ${this.name} !`);
}

const elodie = {
  name: "Élodie"
}

const elodiesHi = sayHi.bind(elodie)

sayHi.call(elodie, 'Marc')
// fn avec this garantie à vie
elodiesHi('Marc')

const bob = {
  name: 'Bob',
  sayHiElodie: elodiesHi,
  greet: sayHi
}
// la règle sujet.verbe.complément ne jour plus c'est le this du bind qui reprend le dessus.
// l'association créée par bind sur elodie est plus forte
bob.sayHiElodie('Johne')
bob.greet('Johne')

// le reinding ne sert à rien
const failedRebind = elodiesHi.bind(bob)
failedRebind('Billie')
const bindBob = sayHi.bind(bob)
bindBob('Thomas')