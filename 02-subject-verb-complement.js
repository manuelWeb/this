// « Sujet, Verbe, Complément » : `this` vaut le « sujet ».
// 'use strict'
name = 'pffff strict le mode'

const alice = {
  name: 'Alice',
  identify () {
    console.log(`Je suis ${this.name}`)
  }
}

// Sujet, verbe, complément : `this` = sujet.
const fxName = 'identify'

alice.identify() // => 'Je suis Alice'
alice['identify']() // => 'Je suis Alice'
alice[fxName]() // => 'Je suis Alice'

const bob = {
  name: 'Bob',
  lang: {
    dev: 'Javascript ES-5-6(-7-8) is comming soooon'
  },
  test: function () {
    console.log(
      `mon ami(e) est ? ${this.friend} et mon kung fu est le ${this.lang.dev}`
    )
  },
  friend: alice.name,
  identify: alice.identify
}

bob.identify() // => 'Je suis Bob'
bob.test() // => 'Je suis Bob'
