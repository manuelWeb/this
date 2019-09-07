// Exemple d’override `this` API-spécifique : les flux Node (et en fait, tous
// les objets utilisant `EventEmitter`).

process.stdin.setEncoding('utf-8')
process.stdin.on('readable', function() {
  // Ici, `this` est le flux émetteur de l’événement, donc `process.stdin`
  console.log(
    "Événement 'readable' sur flux : this est le flux :",
    this.constructor.name,
    this === process.stdin
  )
})
