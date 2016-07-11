import React from 'react'
import ReactDOM from 'react-dom'

import Header from '../Header'
import PictureList from '../PictureList'

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header title="Alurapic"/>
        <PictureList />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#app')
);
