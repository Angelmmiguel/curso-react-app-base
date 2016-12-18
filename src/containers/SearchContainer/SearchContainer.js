import React, { PropTypes } from 'react';

// Importamos los componentes


/**
 * Muestra un buscador, así como la lista de resultados.
 */
class SearchContainer extends React.Component {
  /**
   * Datos falsos. Los utilizamos en desarrollo hasta que leamos los datos de
   * la API.
   */
  stubData() {
    let repo = {
      full_name: 'My Repository',
      owner: {
        login: 'Angel',
        avatar_url: 'https://avatars.githubusercontent.com/u/4056725?v=3',
        html_url: 'https://github.com/Angelmmiguel'
      },
      stargazers_count: 10,
      forks_count: 5
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
   * Render the SearchContainer component
   */
  render() {
    return <main className="container">
      <h1>Búsqueda</h1>
    </main>
  }
}

// Exportamos
export default SearchContainer;
