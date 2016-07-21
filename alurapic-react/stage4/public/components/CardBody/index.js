import React from 'react'

import PictureImage from '../PictureImage'
import Button from '../Button'

class CardBody extends React.Component {
  render() {
    const {
      picture,
      removeItem,
    } = this.props

    return (
      <div className="panel-body">
        <PictureImage url={picture.url} alt={picture.titulo} />

        <Button label="Remover" handleClick={removeItem} id={picture._id}/>
      </div>
    )
  }
}

CardBody.propTypes = {
  picture: React.PropTypes.object.isRequired,
  removeItem: React.PropTypes.func.isRequired,
}

export default CardBody
