import React from 'react'

import PictureImage from '../PictureImage'

class PictureCard extends React.Component {
  render() {
    const { picture } = this.props

    return (
      <div className="col-md-2 painel-animado">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title text-center">{picture.titulo}</h3>
          </div>
          <div className="panel-body">
            <PictureImage url={picture.url} alt={picture.titulo} />
          </div>
        </div>
      </div>
    )
  }
}

PictureCard.propTypes = {
  picture: React.PropTypes.object.isRequired,
}

export default PictureCard
