import React from 'react'

class InputFormGroup extends React.Component {
  render() {
    const {
      label,
      name,
      handleChange,
    } = this.props

    return (
      <div className="form-group">
        <label>{label}</label>
        <input
          name={name}
          className="form-control"
          onChange={ handleChange }
          required
        />
      </div>
    )
  }
}

InputFormGroup.propTypes = {
  label: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  handleChange: React.PropTypes.func,
}

export default InputFormGroup
