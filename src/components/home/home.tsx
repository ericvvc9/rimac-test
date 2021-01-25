import React from 'react';
import './home.scss';
import logo from '../../images/logo.png';
import family from '../../images/family.png';
import square from '../../images/square.png';
import { Field, Form } from 'react-final-form';
import Input from '../input/input';
import Benefits from '../benefits/benefits';
import Button from '../button/button';
import Checkbox from '../checkbox/checkbox';
import { useHistory } from 'react-router-dom';
import { getPersonalData } from '../../utils/services';
import { PersonalData } from '../../models/personal-data';
import SelectInput from '../select-input/select-input';


const required:(t:any) => undefined | any = value => (value ? undefined : 'Campo obligatorio');
const mustBeNumber:(t:any) => undefined | any = value => (isNaN(value) ? 'El campo debe ser un numero' : undefined)
const DOCUMENT_TYPES = [
  {
    label: 'DNI',
    value: 'DNI'
  },
  {
    label: 'RUC',
    value: 'RUC'
  },
  {
    label: 'C/E',
    value: 'C/E'
  },
] 


function Home() {
  const history = useHistory();
  
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
            initialValues={{
              documentType: 'DNI'
            }}
            onSubmit={(values) => {
              debugger
              const request:PersonalData = {
                birthDate:values.birthdate,
                documentType:values.documentType,
                documentNumber:values.documentNumber,
                phone:values.phone
              }
              getPersonalData(request).then((response) => {
                history.push("/familiars");
              })
            }}
            render={({ handleSubmit,values,invalid }) => (
              <form onSubmit={handleSubmit}>
                <h2 className="home__title-assurance">Obtén tu <span className="home__title-assurance-red">seguro ahora</span></h2>
                <p>Ingresa los datos para comenzar.</p>
                <Field name="documentType" >
                  {props => (
                    <>
                      <SelectInput options={DOCUMENT_TYPES} meta={props.meta} {...props.input} placeholder="Nro de Documento">
                        <Field name="documentNumber" validate={required}>
                          {props => (
                            <Input meta={props.meta} {...props.input} placeholder="Nro de Documento" />
                          )}
                        </Field>
                      </SelectInput>

                    </>
                  )}
                </Field>
                <Field name="birthdate" validate={required}>
                  {props => (
                    <Input type="date" meta={props.meta} {...props.input} placeholder="Fecha de nacimiento" />
                  )}
                </Field>
                <Field name="phone" validate={mustBeNumber}>
                  {props => (
                    <Input meta={props.meta} {...props.input} placeholder="Celular" />
                  )}
                </Field>

                <Field name="acceptPolicied" validate={required}>
                  {props => (
                    <Checkbox
                      name={props.input.name}
                      checked={props.input.value}
                      onChange={props.input.onChange}
                      text="Acepto la Política de Protección de Datos Personales y los Términos y Condiciones."
                    ></Checkbox>
                  )}
                </Field>
                <Field name="acceptComCommertials" validate={required}>
                  {props => (
                    <Checkbox
                      name={props.input.name}
                      checked={props.input.value}
                      onChange={props.input.onChange}
                      text="Acepto la Política de Envío de Comunicaciones Comerciales."
                    ></Checkbox>
                  )}
                </Field>
                
                <Button disabled={invalid} type="submit">
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
