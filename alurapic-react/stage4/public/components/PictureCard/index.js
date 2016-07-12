import React from 'react'

import CardHeader from '../CardHeader'
import CardBody from '../CardBody'

class PictureCard extends React.Component {
  render() {
    const { picture } = this.props

    return (
      <div className="col-md-2 painel-animado">
        <div className="panel panel-default">
          <CardHeader title={picture.titulo} />
          <CardBody picture={picture} />
        </div>
      </div>
    )
  }
}

PictureCard.propTypes = {
  picture: React.PropTypes.object.isRequired,
}

export default PictureCard
