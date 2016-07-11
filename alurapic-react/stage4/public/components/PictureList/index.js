import React from 'react';
import axios from 'axios'

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
        ))}
      </div>
    );
  }
}

export default PictureList
