import React from 'react'

import InputFormGroup from '../InputFormGroup'
import TextareaFormGroup from '../TextareaFormGroup'

class PictureForm extends React.Component {
  render() {
    return (
      <div>
        <form novalidate name="formulario" className="row">
          <div className="col-md-6">

            <InputFormGroup label="Título" name="titulo" />

            <InputFormGroup label="URL" name="url" />

            <TextareaFormGroup label="Descrição" name="descricao" />

            <div className="form-group">
              <label>Grupo</label>
              <select name="grupo" className="form-control" required>
                <option value="">Escolha um grupo</option>
              </select>
            </div>

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
