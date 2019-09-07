// « Sujet, Verbe, Complément » : `this` vaut le « sujet ».

const alice = {
  name: 'Alice',
  identify() {
    console.log(`Je suis ${this.name}`)
  },
}

// Sujet, verbe, complément : `this` = sujet.
const fxName = 'identify'

alice.identify() // => 'Je suis Alice'
alice['identify']() // => 'Je suis Alice'
alice[fxName]() // => 'Je suis Alice'

const bob = {
  name: 'Bob',
  identify: alice.identify,
}

bob.identify() // => 'Je suis Bob'
