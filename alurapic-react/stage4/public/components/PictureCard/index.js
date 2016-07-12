import React from 'react'

import CardHeader from '../CardHeader'
import PictureImage from '../PictureImage'

class PictureCard extends React.Component {
  render() {
    const { picture } = this.props

    return (
      <div className="col-md-2 painel-animado">
        <div className="panel panel-default">

          <CardHeader title={picture.titulo} />

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
