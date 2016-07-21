import React from 'react'

class PictureImage extends React.Component {
  render() {
    const {
      url,
      alt,
    } = this.props

    return (
      <img
        className="img-responsive center-block"
        src={url}
        alt={alt}
      />
    )
  }
}

PictureImage.propTypes = {
  url: React.PropTypes.string.isRequired,
  alt: React.PropTypes.string,
}

export default PictureImage
