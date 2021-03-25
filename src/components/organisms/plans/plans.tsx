import React, { useState } from 'react';
import './plans.scss';

const planes = [
  {
    label: 'Básico',
    amount: '160',
    term: 'mensual'
  },
  {
    label: 'Avanzado',
    amount: '160',
    term: 'mensual'
  },
  {
    label: 'Premium',
    amount: '160',
    term: 'mensual'
  },
  {
    label: 'Full',
    amount: '160',
    term: 'mensual'
  },
]

interface PlansProps {
  relatives: Array<{
    t:string
  }>;
  selectedPlan: number;
  onChangeSelectedPlan: () => void;
}

function Plans({relatives,selectedPlan}: PlansProps) {
  return <div className="plans">
    {planes.map((plan) => {
      return <div className="plans__square">
          <div className="plans__check">
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.70605 4.00001L3.90213 6.35295L8.29429 1.64706" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div className="plans__label">{plan.label}</div>
          <div className="plans__amount-wrap">
            <div className="plans__currency">S/</div>
            <div className="plans__amount">{plan.amount}</div>
          </div>
          <div className="plans__term">{plan.term}</div>
      </div>
    })}
  </div>
}

export default Plans