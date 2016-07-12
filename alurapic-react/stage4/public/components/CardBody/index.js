import React from 'react'

import PictureImage from '../PictureImage'

class CardBody extends React.Component {
  render() {
    const { picture } = this.props

    return (
      <div className="panel-body">
        <PictureImage url={picture.url} alt={picture.titulo} />
      </div>
    )
  }
}

CardBody.propTypes = {
  picture: React.PropTypes.object.isRequired,
}

export default CardBody
