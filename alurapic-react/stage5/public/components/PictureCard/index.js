import React from 'react'

import CardHeader from '../CardHeader'
import CardBody from '../CardBody'

class PictureCard extends React.Component {
  render() {
    const {
      picture,
      removeItem,
    } = this.props

    return (
      <div className="col-md-2 painel-animado">
        <div className="panel panel-default">
          <CardHeader title={picture.titulo} />
          <CardBody picture={picture} removeItem={removeItem}/>
        </div>
      </div>
    )
  }
}

PictureCard.propTypes = {
  picture: React.PropTypes.object.isRequired,
  removeItem: React.PropTypes.func.isRequired,
}

export default PictureCard
