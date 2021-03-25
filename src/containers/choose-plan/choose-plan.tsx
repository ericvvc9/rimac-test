import React from 'react';
import './choose-plan.scss';
import Layout from '../../components/atoms/layout/layout';
import BackStep from '../../components/atoms/back-step/back-step';
import { HeaderText } from '../../components/atoms/header-text/header-text';
import Text from '../../components/atoms/text/text';
import Plans from '../../components/organisms/plans/plans';
import FooterPlan from '../../components/organisms/footer-plan/footer-plan';
import DetailPlan from '../../components/organisms/detail-plan/detail-plan';
import ResumePlans from '../../components/organisms/resume-plans/resume-plans';
import Button from '../../components/atoms/button/button';
import { useHistory } from 'react-router';

function ChoosePlan() {
  const history = useHistory();
  function onChangeSelectedPlan(){

  }
  function buyPlan() {
    history.push('thanks')
  }
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
          <Plans 
            relatives={[]}
            selectedPlan={1}
            onChangeSelectedPlan={onChangeSelectedPlan}
          ></Plans>
          <DetailPlan></DetailPlan>
          <ResumePlans></ResumePlans>
          <FooterPlan/>
          <Button onClick={buyPlan}>COMPRAR PLAN</Button>
        </div>
      </div>
    </Layout>
  );
}

export default ChoosePlan;
