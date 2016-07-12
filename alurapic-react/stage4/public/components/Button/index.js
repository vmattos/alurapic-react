import React from 'react'

class Button extends React.Component {
  render() {
    const { label } = this.props

    return (
      <button
        className="btn btn-danger btn-block"
      >
        {label}
      </button>
    )
  }
}

Button.propTypes = {
  label: React.PropTypes.string.isRequired,
}

export default Button
