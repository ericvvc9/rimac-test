import React from 'react';
import './home.scss';
import { Field, Form } from 'react-final-form';
import Input from '../../components/atoms/input/input';
import Benefits from '../../components/molecules/benefits/benefits';
import Button from '../../components/atoms/button/button';
import Checkbox from '../../components/atoms/checkbox/checkbox';
import { useHistory } from 'react-router-dom';
import { getPersonalData } from '../../utils/services';
import { PersonalData } from '../../models/personal-data';
import SelectInput from '../../components/atoms/select-input/select-input';
import Layout from '../../components/atoms/layout/layout';
import { DOCUMENT_TYPES } from '../../constants/documentTypes';
import { HeaderText } from '../../components/atoms/header-text/header-text';
import Text from '../../components/atoms/text/text';
import { mustBeNumber, required } from '../../utils/validation';


function Home() {
  const history = useHistory();

  return (
    <Layout homePage>
      <div className="home">
        <div className="home__form">
          <Form
            initialValues={{
              documentType: 'DNI'
            }}
            onSubmit={(values) => {
              const request: PersonalData = {
                birthDate: values.birthdate,
                documentType: values.documentType,
                documentNumber: values.documentNumber,
                phone: values.phone
              }
              getPersonalData(request).then((response) => {
                history.push("/familiars");
              })
            }}
            render={({ handleSubmit, values, invalid }) => (
              <form onSubmit={handleSubmit}>
                <HeaderText
                  fontSize="small"
                  firstText="Obtén tu"
                  secondText=" seguro ahora"
                ></HeaderText>
                <Text>
                  Ingresa los datos para comenzar.
                </Text>
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
    </Layout>
  );
}

export default Home;
