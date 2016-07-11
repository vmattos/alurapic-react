import React from 'react';
import axios from 'axios'

import PictureCard from '../PictureCard'

class PictureList extends React.Component {
  constructor() {
    super()
    this.state = { data: [] }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    axios.get('/v1/fotos')
      .then(response => this.setState({ data: response.data }))
      .catch(error => console.error(error));
  }

  render() {
    return (
      <div>
        {this.state.data.map((picture) => (
          <PictureCard
            key={picture._id}
            picture={picture}
          />
        ))}
      </div>
    );
  }
}

export default PictureList
