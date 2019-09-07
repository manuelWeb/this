// Avec leur utilisation callback qui ne redéfinit pas `this`, les fonctions
// fléchées sont vite indispensables dans le JSX des composants basés classes…

import React, { Component } from 'react'
import { arrayOf, string } from 'prop-types'

export default class Course extends Component {
  static propTypes = {
    baseURL: string.isRequired,
    parts: arrayOf(string).isRequired,
    title: string.isRequired,
  }

  render() {
    return (
      <section className="course">
        <h1>{this.props.title}</h1>
        <p>Ce cours couvre notamment :</p>
        <ol>
          {this.props.parts.map((part) => (
            // Ici, `this.props` fonctionne car `this` est celui en vigueur au
            // niveau du `render` : le callback en fonction fléchée ne le
            // redéfinit pas.
            <li key={part}>
              <a href={`${this.props.baseURL}/${part}`}>{part}</a>
            </li>
          ))}
        </ol>
      </section>
    )
  }
}
