// https://cours-video.delicious-insights.com/courses/javascript-this-is-it/102201-garantir-un-this-donne/321761-bind
function sayHi(whom) {
  console.log(`Salut ${(whom && whom) || this.whom} moi c'est ${this.name} !`);
}

const elodie = { name: "Élodie", whom: "Dupont" }

const elodiesHi = sayHi.bind(elodie)
// fn avec this garantie à vie
// elodiesHi('Marc')

// Salut Marc moi c'est Élodie !
sayHi.call(elodie, 'Marc')

// Salut Jhone moi c'est Élodie ! // Salut Dupont moi c'est Élodie !
sayHi.apply(elodie, ['Jhone']); sayHi.apply(elodie)


// Salut Max moi c'est Élodie !
sayHi.bind(elodie, 'Max')()
