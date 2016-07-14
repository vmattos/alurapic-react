import React from 'react'
import axios from 'axios'

import InputFormGroup from '../InputFormGroup'
import TextareaFormGroup from '../TextareaFormGroup'
import SelectFormGroup from '../SelectFormGroup'

class PictureForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { data: [] }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    axios.get('/v1/grupos')
      .then(response => this.setState({ data: response.data }))
      .catch(error => console.error(error));
  }

  render() {
    return (
      <div>
        <form novalidate name="formulario" className="row">
          <div className="col-md-6">

            <InputFormGroup label="Título" name="titulo" />

            <InputFormGroup label="URL" name="url" />

            <TextareaFormGroup label="Descrição" name="descricao" />

            <SelectFormGroup label="Grupo" name="grupo" groups={this.state.data} />

            <button type="submit" className="btn btn-primary">
              Salvar
            </button>

            <a href="/" className="btn btn-primary">Voltar</a>

            <hr />

          </div>
        </form>
      </div>
    )
  }
}

export default PictureForm
