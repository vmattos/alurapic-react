import React from 'react'

class TextareaFormGroup extends React.Component {
  render() {
    const {
      label,
      name,
      handleChange,
    } = this.props

    return (
      <div className="form-group">
        <label>{ label }</label>
        <textarea
          name={ name }
          className="form-control"
          onChange={handleChange}
        ></textarea>
      </div>
    )
  }
}

TextareaFormGroup.propTypes = {
  label: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  handleChange: React.PropTypes.func,
}

export default TextareaFormGroup
