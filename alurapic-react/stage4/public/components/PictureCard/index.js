import React from 'react'

import PictureImage from '../PictureImage'

class PictureCard extends React.Component {
  render() {
    const { picture } = this.props

    return (
      <div className="col-md-2 painel-animado" key={picture._id}>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title text-center">{picture.titulo}</h3>
          </div>
          <div className="panel-body">
            <PictureImage url={picture.url} alt={picture.title} />
          </div>
        </div>
      </div>
    )
  }
}

export default PictureCard
