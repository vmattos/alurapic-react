import React from 'react'

class CardHeader extends React.Component {
  render() {
    const { title } = this.props

    return (
      <div className="panel-heading">
        <h3 className="panel-title text-center">{title}</h3>
      </div>
    )
  }
}

CardHeader.propTypes = {
  title: React.PropTypes.string.isRequired,
}

export default CardHeader
