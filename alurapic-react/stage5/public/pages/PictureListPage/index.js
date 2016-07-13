import React from 'react'

import Header from '../../components/Header'
import PictureList from '../../components/PictureList'

class PictureListPage extends React.Component {
  render() {
    return (
      <div className="container">
        <Header title="Alurapic"/>
        <PictureList />
      </div>
    );
  }
}

export default PictureListPage
