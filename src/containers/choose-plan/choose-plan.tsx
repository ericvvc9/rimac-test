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

function ChoosePlan() {
  function onChangeSelectedPlan(){

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
        </div>
      </div>
    </Layout>
  );
}

export default ChoosePlan;
