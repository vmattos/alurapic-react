import React from 'react'

import PictureImage from '../PictureImage'
import Button from '../Button'

class CardBody extends React.Component {
  render() {
    const { picture } = this.props

    return (
      <div className="panel-body">
        <PictureImage url={picture.url} alt={picture.titulo} />

        <Button label="Remover" />
      </div>
    )
  }
}

CardBody.propTypes = {
  picture: React.PropTypes.object.isRequired,
}

export default CardBody
