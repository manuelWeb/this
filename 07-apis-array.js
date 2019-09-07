// Les API d’itération natives à `Array` permettent de préciser le « contexte »
// (le `this`) à employer lors de l’invocation de la fonction de rappel.

const toddlers = ['Anna', 'Elliott']

function visitSelf(person) {
  console.log(`${person} visite ${this.name}`)
}

function describeVisitOnSelf(person) {
  return `${person} adore ${this.name}`
}

toddlers.forEach(visitSelf, { name: 'Amsterdam' })
// => Logue 'Anna visite Amsterdam', 'Elliott visite Amsterdam'

toddlers.map(describeVisitOnSelf, { name: 'Amsterdam' })
// => ['Anna adore Amsterdam', 'Elliott adore Amsterdam']
