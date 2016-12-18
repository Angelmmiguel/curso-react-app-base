import React, { PropTypes } from 'react';

// Componentes
import Header from '../../components/Header';

/**
 * Este container muestra los detalles para un repositorio concreto
 */
class DetailsContainer extends React.Component {

  stubData() {
    let repo = {
      name: 'v1.0',
      html_url: '',
      author: {
        login: 'Angel',
        avatar_url: '',
        html_url: 'https://github.com/Angelmmiguel'
      },
      published_at: 12018092381213,
      zipball_url: '',
      tarball_url: ''
    }
    return [
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo)
    ]
  }

  /**
   * UI del contenedor
   */
  render() {
    return <main className="container">
      <Header />
      <h1>Versiones!</h1>
    </main>;
  }
}

// Export the class
export default DetailsContainer;
