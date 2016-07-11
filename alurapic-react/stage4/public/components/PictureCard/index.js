import React from 'react'

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
            <img
              className="img-responsive center-block"
              src={picture.url}
              alt={picture.titulo}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default PictureCard
