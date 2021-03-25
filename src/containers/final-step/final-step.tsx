import React from 'react';
import './final-step.scss';
import { useHistory } from 'react-router-dom';
import { getCurrentUser } from '../../utils/services';
import Text from '../../components/atoms/text/text';
import Button from '../../components/atoms/button/button';
import { HeaderText } from '../../components/atoms/header-text/header-text';
import broder2 from '../../images/broder2.png';
import Layout from '../../components/atoms/layout/layout';

function FinalStep() {
  const history = useHistory();
  const user = getCurrentUser();
  function goToStart() {
    history.push('/')
  }
  return (
    <Layout>
      <div className="final-step">
        <div>
          <img src={broder2}/>
        </div>
        <HeaderText
          firstText="¡Gracias por "
          secondText="confiar en nosotros!"
        />
        <Text>
          Queremos conocer mejor la salud de los asegurados. Un asesor se pondrá en contacto contigo en las siguientes 48 horas.
        </Text>
        <Button onClick={goToStart}>Ir a salud rimac</Button>
      </div>
    </Layout>
  );
}

export default FinalStep;
