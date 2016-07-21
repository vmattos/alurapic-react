import React from 'react';
import axios from 'axios'

import PictureCard from '../PictureCard'

class PictureList extends React.Component {
  constructor() {
    super()
    this.state = { data: [] }
    this.removeItem = this.removeItem.bind(this)
  }

  componentWillMount() {
    this.fetchData()
  }

  fetchData() {
    axios.get('/v1/fotos')
      .then(response => this.setState({ data: response.data }))
      .catch(error => console.error(error));
  }

  removeItem(id, e) {
    return () => {
      const newState = this.state.data.filter((i) => i._id !== id)
      this.setState({ data: newState })
    }
  }

  render() {
    return (
      <div>
        {this.state.data.map((picture) => (
          <PictureCard
            key={picture._id}
            picture={picture}
            removeItem={this.removeItem}
          />
        ))}
      </div>
    );
  }
}

export default PictureList
