import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'

import PictureListPage from '../../pages/PictureListPage'

class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/">
          <IndexRedirect to="/fotos" />
          <Route path="fotos" component={PictureListPage} />
        </Route>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#app')
);
