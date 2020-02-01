exports.name = 'foutu'

const aurore = {
  name: 'Aurore'
}

const args = ['Elliot', '245', '555', '0126']

function callMeMaybe(whom, area, prefix, line) {
  const tel = `${area}-${prefix}-${line}`
  console.log(`Salut ${whom} moi c'est ${this.name}, appele moi au ${tel}`);
  console.log('arguments[3]: ', arguments[3]);
}

callMeMaybe(aurore, args)
// avec apply on attach d'abord this(obj aurore) et on ajoute un like-array (array args)
callMeMaybe.apply(aurore, args)

// apply et une fonction fléché(pas de this) renvoi le this global c'est à dire 'foutu'
const callMeNever = (whom, area, prefix, line) => {
  const tel = `${area}-${prefix}-${line}`
  console.log(`Salut ${whom} moi c'est ${this.name}, appele moi au ${tel}`);
  console.log('arguments[3]: ', arguments[3]);
}
callMeNever.apply(aurore, args)