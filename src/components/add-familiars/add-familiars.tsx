import React from 'react';
import './add-familiars.scss';
import logo from '../../images/logo.png';
import family from '../../images/family.png';
import square from '../../images/square.png';
import { Form } from 'react-final-form';
import Input from '../input/input';
import Button from '../button/button';
import Radio from '../radio/radio';
import { useHistory } from 'react-router-dom';

function AddFamiliars() {
  const history = useHistory();

  return (
    <div className="add-familiars">
      <div className="grid lg:grid-cols-4">
        <div className="add-familiars__container">
          <div className="add-familiars__logo">
            <img alt="Logo Rimac"src={logo} />
          </div>
          <div className="add-familiars__content">
            <div className="add-familiars__main-container">
              <div className="add-familiars__family-wrapper">
                <img className="add-familiars__family-image" alt="Familia Rimac"src={family} />
              </div>
            </div>
          </div>
          <img className="add-familiars__background-square" alt="Fondo Rimac"src={square} />
        </div>
        <div className="add-familiars__form">
          <div>
            PASO 1 DE 7
          </div>
          <h1>
            Hola, Luisa
          </h1>
          <p>Valida que los datos sean correctos.</p>
          <Form
            onSubmit={(values) => {
              history.push("/choose-plan");
              //debugger
            }}
            //validate={validate}
            render={({ handleSubmit,values }) => (
              <form onSubmit={handleSubmit}>
                <h2>Datos personales del titular</h2>
                <div>
                  <Input placeholder="Nro de Documento" />
                </div>
                <div>
                  <Input placeholder="Nombres" />
                </div>
                <div>
                  <Input placeholder="Apellido Paterno" />
                </div>
                <div>
                  <Input placeholder="Apellido Materno" />
                </div>
                <div>
                  <Input placeholder="Fecha de Nacimiento" />
                </div>
                <div>
                  Genero
                </div>
                <Radio text="Masculino">
                </Radio>
                <Radio text="Femenino">
                </Radio>
                <div>
                  ¿A quién vamos a asegurar?
                </div>
                <Radio text="Solo a mí">
                </Radio>
                <Radio text="A mí y a mi familia">
                </Radio>
                <div>
                  Datos de los familiares
                </div>
                <div>
                  
                </div>
                
                <Button disabled={!values.acceptPolicied || !values.acceptComCommertials} type="submit">
                  Comencemos
                </Button>
                
              </form>
            )}
          />
        </div>
      </div>
    </div>
  );
}

export default AddFamiliars;
