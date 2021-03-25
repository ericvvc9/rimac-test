import React from 'react';
import './add-familiars.scss';
import logo from '../../images/logo.png';
import family from '../../images/family.png';
import square from '../../images/square.png';
import { Field, Form } from 'react-final-form';
import Input from '../../components/atoms/input/input';
import Button from '../../components/atoms/button/button';
import Radio from '../../components/atoms/radio/radio';
import { useHistory } from 'react-router-dom';
import { getCurrentUser } from '../../utils/services';
import { RELATIVES } from '../../constants/relatives';
import SelectInput from '../../components/atoms/select-input/select-input';
import { FieldArray } from 'react-final-form-arrays';
import arrayMutators from 'final-form-arrays'
import Layout from '../../components/atoms/layout/layout';
import BackStep from '../../components/atoms/back-step/back-step';
import { HeaderText } from '../../components/atoms/header-text/header-text';
import Text from '../../components/atoms/text/text';
import { DOCUMENT_TYPES } from '../../constants/documentTypes';
import { required } from '../../utils/validation';

const Condition = ({ when, is, children }: {
  when: string,
  is: any,
  children: React.ReactNode
}) => (
  <Field name={when} subscription={{ value: true }}>
    {({ input: { value } }) => (value === is ? children : null)}
  </Field>
)
function AddFamiliars() {
  const history = useHistory();
  const user = getCurrentUser();

  function addRelative() {

  }

  return (
    <Layout >
      <div className="add-familiars">
        <div className="add-familiars__form">
          <BackStep
            path={''}
            step={1}
            totalSteps={7}
          />
          <HeaderText
            firstText="Hola, "
            secondText={user?.name.first}
          />
          <Text>
            Valida que los datos sean correctos.
          </Text>
          <Form
            initialValues={{
              documentNumber: user?.documentNumber,
              name: user?.name.first,
              paternalSurName: user?.name.last,
              maternalSurName: '',
              documentType: user?.documentType,
              gender: user?.gender,
              birthDate: user?.birthDate,
              relativeType: '1'
            }}
            onSubmit={(values) => {
              //debugger
              history.push("/choose-plan");
            }}
            mutators={{
              // potentially other mutators could be merged here
              ...arrayMutators
            }}
            render={({ handleSubmit, values, form: { mutators: { push } } }) => (
              <form onSubmit={handleSubmit}>
                <h2>Datos personales del titular</h2>
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
                <Field name="name">
                  {props => (
                    <Input
                      meta={props.meta}
                      {...props.input}
                      placeholder="Nombres"
                    />
                  )}
                </Field>
                <Field name="paternalSurName">
                  {props => (
                    <Input
                      meta={props.meta}
                      {...props.input}
                      placeholder="Apellido Paterno"
                    />
                  )}
                </Field>
                <Field name="maternalSurName">
                  {props => (
                    <Input
                      meta={props.meta}
                      {...props.input}
                      placeholder="Apellido Materno"
                    />
                  )}
                </Field>
                <Field name="birthDate">
                  {props => (
                    <Input
                      type="date"
                      meta={props.meta}
                      {...props.input}
                      placeholder="Fecha de nacimiento"
                    />
                  )}
                </Field>
                <Text>
                  Genero
                </Text>
                <Field name="gender" type="radio" value="M" component={({ input, text }) => <Radio {...input} text={text} />} text="Femenino"></Field>
                <Field name="gender" type="radio" value="F" component={({ input, text }) => <Radio {...input} text={text} />} text="Masculino"></Field>
                <Text>
                  ¿A quién vamos a asegurar?
                </Text>
                <Field name="insurance" type="radio" value="onlyMe" component={({ input, text }) => <Radio {...input} text={text} />} text="Solo a mí"></Field>
                <Field name="insurance" type="radio" value="meAndMyFamily" component={({ input, text }) => <Radio {...input} text={text} />} text="A mí y a mi familia"></Field>
                <Condition when="insurance" is="meAndMyFamily">
                  <Text>
                    Datos de los familiares
                  </Text>
                  <div>
                    <Field name="relativeType" >
                      {props => (
                        <div className="add-familiars__row">
                          <SelectInput options={RELATIVES} meta={props.meta} {...props.input} placeholder="Vinculo">
                            <Field name="relativeBirthDate" >
                              {props => (
                                <Input meta={props.meta} type="date" {...props.input} placeholder="Fecha de Nacimiento" />
                              )}
                            </Field>
                          </SelectInput>
                          <Button
                            type="button"
                            typeButton="text"
                            onClick={() => {
                              if(values.relativeType && values.relativeBirthDate ) {
                                push('relatives', {
                                  relative: values.relativeType,
                                  birthdate: values.relativeBirthDate
                                })
                              }
                            }}>Agregar</Button>
                        </div>
                      )}
                    </Field>
                    <FieldArray name="relatives">
                      {({ fields }) =>
                        fields.map((name, index) => (
                          <div key={name}>
                            <Field
                              name={`${name}.relative`}
                              component="input"
                              disabled
                              placeholder="First Name"
                            />
                            <Field
                              name={`${name}.birthdate`}
                              disabled
                              component="input"
                              placeholder="Last Name"
                            />
                            <span
                              onClick={() => fields.remove(index)}
                              style={{ cursor: 'pointer' }}
                            >
                              Eliminar
                            </span>
                          </div>
                        ))
                      }
                    </FieldArray>
                  </div>
                </Condition>

                <Button type="submit">
                  Continuar
                </Button>

              </form>
            )}
          />
        </div>
      </div>
    </Layout>

  );
}

export default AddFamiliars;
