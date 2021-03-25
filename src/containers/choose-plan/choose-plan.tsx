import React from 'react';
import './choose-plan.scss';
import logo from '../../images/logo.png';
import family from '../../images/family.png';
import square from '../../images/square.png';
import { Field, Form } from 'react-final-form';
import Input from '../../components/atoms/input/input';
import Button from '../../components/atoms/button/button';
import Checkbox from '../../components/atoms/checkbox/checkbox';
import Layout from '../../components/atoms/layout/layout';
import BackStep from '../../components/atoms/back-step/back-step';
import { HeaderText } from '../../components/atoms/header-text/header-text';
import Text from '../../components/atoms/text/text';
import { Plans } from '../../components/organisms/plans/plans';

function ChoosePlan() {
  return (
    <Layout>
      <div className="choose-plan">
        <div className="choose-plan__form">
          <BackStep
            path={''}
            step={2}
            totalSteps={7}
          />
          <HeaderText
            firstText="Elige "
            secondText="tu protección"
          />
          <Text>Selecciona tu plan de salud ideal.</Text>
          <Plans></Plans>
          
        </div>
      </div>
    </Layout>
  );
}

export default ChoosePlan;
