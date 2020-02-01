// Chaque fonction déclarée avec `function` ayant son propre contexte
// d’exécution, il est trop facile de « perdre » le contexte en cours au sein
// d’une méthode : un simple callback va poser problème…

const course = {
  heading: 'JavaScript: this is it',

  runDumbCampaign () {
    // Ici, `this` va marcher vu l’învocation Sujet-Verbe-Complément
    console.log(`Notre cours “${this.heading}” vient de sortir !`)
    // => 'Notre cours “JavaScript: this is it” vient de sortir !'

    setTimeout(function () {
      // Mais ici, on est dans un callback, donc par définition une fonction
      // passée par référence, qui n’a donc pas un `this` automatique sauf
      // override API (ce qui n’est pas le cas ici).
      console.log(`Découvrez vite notre dernier cours : “${this.heading}” !`)
      // => 'Découvrez vite notre dernier cours : “undefined” !'
      // (pour un cours sur le `this`, ça la fout mal…)
    }, 0)
  }
}

course.bind(this).runDumbCampaign()
