import React from 'react';
import './add-familiars.scss';
import logo from '../../images/logo.png';
import family from '../../images/family.png';
import square from '../../images/square.png';
import { Field, Form } from 'react-final-form';
import Input from '../input/input';
import Benefits from '../benefits/benefits';
import Button from '../button/button';
import Radio from '../radio/radio';
import Checkbox from '../checkbox/checkbox';

function AddFamiliars() {
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
              debugger
            }}
            //validate={validate}
            render={({ handleSubmit,values }) => (
              <form onSubmit={handleSubmit}>
                <h2>Datos personales del titular</h2>
                <div>
                  <Input placeholder="Nro de Documento" />
                </div>
                <div>
                  <Input placeholder="Fecha de nacimiento" />
                </div>
                <div>
                  <Input placeholder="Celular" />
                </div>

                <Field name="acceptPolicied">
                  {props => (
                    <Checkbox
                      name={props.input.name}
                      checked={props.input.value}
                      onChange={props.input.onChange}
                      text="Acepto la Política de Protección de Datos Personales y los Términos y Condiciones."
                    ></Checkbox>
                  )}
                </Field>
                <Field name="acceptComCommertials">
                  {props => (
                    <Checkbox
                      name={props.input.name}
                      checked={props.input.value}
                      onChange={props.input.onChange}
                      text="Acepto la Política de Envío de Comunicaciones Comerciales."
                    ></Checkbox>
                  )}
                </Field>
                
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
