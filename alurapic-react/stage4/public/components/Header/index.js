import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1 className="text-center">{this.props.title}</h1>
      </div>
    );
  }
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired
}

export default Header
