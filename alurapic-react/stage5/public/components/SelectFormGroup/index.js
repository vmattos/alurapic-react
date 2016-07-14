import React from 'react'

class SelectFormGroup extends React.Component {
  render() {
    const {
      label,
      name,
      groups,
    } = this.props

    return (
      <div className="form-group">
        <label>{ label }</label>
        <select name={ name } className="form-control" required>
          {groups.map((group) => (
            <option value={group.value}>
              {group.text}
            </option>
          ))}
        </select>
      </div>
    )
  }
}

SelectFormGroup.propTypes = {
  label: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  groups: React.PropTypes.string.isRequired,
}

export default SelectFormGroup
