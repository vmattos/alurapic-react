import React from 'react'
import axios from 'axios'

import InputFormGroup from '../InputFormGroup'
import TextareaFormGroup from '../TextareaFormGroup'
import SelectFormGroup from '../SelectFormGroup'
import PictureImage from '../PictureImage'

class PictureForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { groups: [] }

    this.handleImageInput = this.handleImageInput.bind(this)
    this.handleTitleInput = this.handleTitleInput.bind(this)
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    axios.get('/v1/grupos')
      .then(response => this.setState({ groups: response.data }))
      .catch(error => console.error(error));
  }

  handleTitleInput(e) {
    const form = { titulo: e.nativeEvent.target.value }
    const newState = Object.assign({}, this.state, form)
    this.setState(newState)
  }

  handleImageInput(e) {
    const form = { url: e.nativeEvent.target.value }
    const newState = Object.assign({}, this.state, form)
    this.setState(newState)
  }

  render() {
    return (
      <div>
        <form novalidate name="formulario" className="row" onSubmit={this.handleSubmit}>
          <div className="col-md-6">

            <InputFormGroup label="Título" name="titulo" handleChange={this.handleTitleInput}/>

            <InputFormGroup label="URL" name="url" handleChange={this.handleImageInput}/>

            <TextareaFormGroup label="Descrição" name="descricao" />

            <SelectFormGroup label="Grupo" name="grupo" groups={this.state.groups} />

            <button type="submit" className="btn btn-primary">
              Salvar
            </button>

            <a href="/" className="btn btn-primary">Voltar</a>

            <hr />

          </div>
          <div className="col-md-6">
            <PictureImage url={this.state.url} />
          </div>
        </form>
      </div>
    )
  }
}

export default PictureForm
