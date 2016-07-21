import React from 'react'

class Button extends React.Component {
  render() {
    const {
      label,
      handleClick,
      id,
    } = this.props

    return (
      <button
        className="btn btn-danger btn-block"
        onClick={ handleClick(id) }
      >
        {label}
      </button>
    )
  }
}

Button.propTypes = {
  label: React.PropTypes.string.isRequired,
  handleClick: React.PropTypes.func.isRequired,
  id: React.PropTypes.string.isRequired,
}

export default Button
