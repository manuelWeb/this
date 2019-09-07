// Une fonction fléchée n’ayant pas de contexte d’exécution propre, elle
// réutilise le `this` en vigueur dans sa portée conteneur, ce qui est notamment
// idéal pour la majorité des callbacks.

const course = {
  title: 'JavaScript: this is it',

  runDumbCampaign() {
    // Ici, `this` va marcher vu l’invocation Sujet-Verbe-Complément
    console.log(`Notre cours “${this.title}” vient de sortir !`)
    // => 'Notre cours “JavaScript: this is it” vient de sortir !'

    setTimeout(() => {
      // Ici ça marchera aussi, puisque la fonction fléchée ne redéfinit pas
      // `this` : on va aller le chercher dans les portées conteneurs
      // (*closures*), et le trouver dans la portée immédiatement supérieure,
      // celle de `runDumbCampaign`.
      console.log(`Découvrez vite notre dernier cours : “${this.title}” !`)
      // => 'Découvrez vite notre dernier cours : “JavaScript: this is it” !'
    }, 0)
  },
}

course.runDumbCampaign()
