import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import PictureListPage from '../../pages/PictureListPage'

class App extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={PictureListPage} />
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#app')
);
