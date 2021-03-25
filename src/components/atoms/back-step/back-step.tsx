import React from 'react';
import { useHistory } from 'react-router';
import back from '../../../images/back.png';
import './back-step.scss';

interface BackStepProps {
  path:string;
  step: string | number;
  totalSteps: string | number;
}

function BackStep({ path , step, totalSteps, ...rest }: BackStepProps) {
  const history = useHistory()
  function goBack() {
    history.goBack();
  }
  return (
    <div className="back-step">
      <img onClick={goBack} className="back-step__image" src={back}/>
      <div className="back-step__text">
        <span className="back-step__completed">
          PASO {step}
        </span>
        <span className="back-step__uncompleted">
          {' '} DE {totalSteps}
        </span>
      </div>
    </div>
  );
}

export default BackStep;
