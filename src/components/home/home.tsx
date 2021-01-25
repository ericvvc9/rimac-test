import React from 'react';
import './home.scss';
import logo from '../../images/logo.png';
import family from '../../images/family.png';
import square from '../../images/square.png';
import { Field, Form } from 'react-final-form';
import Input from '../input/input';
import Benefits from '../benefits/benefits';
import Button from '../button/button';
import Radio from '../radio/radio';
import Checkbox from '../checkbox/checkbox';

function Home() {
  return (
    <div className="home">
      <div className="grid lg:grid-cols-2 ">
        <div className="home__container">
          <div className="home__logo">
            <img alt="Logo Rimac"src={logo} />
          </div>
          <div className="home__content">
            <div className="home__main-container">

              <div>
                <div className="home__title">
                  Seguro de
                </div>
                <div className="home__subtitle">
                  Salud
                </div>
                <Benefits />
              </div>
              <div className="home__family-wrapper">
                <img className="home__family-image" alt="Familia Rimac"src={family} />
              </div>
            </div>
            <footer className="footer">
              <p className="footer__text">© 2020 RIMAC Seguros y Reaseguros.</p>
            </footer>
          </div>
          <img className="home__background-square" alt="Fondo Rimac"src={square} />
        </div>
        <div className="home__form">
          <Form
            onSubmit={(values) => {
              debugger
            }}
            //validate={validate}
            render={({ handleSubmit,values }) => (
              <form onSubmit={handleSubmit}>
                <h2>Obtén tu seguro ahora</h2>
                <p>Ingresa los datos para comenzar.</p>

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

export default Home;
