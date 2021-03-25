import React, { useState } from 'react';
import './footer-plan.scss';
import broder from '../../../images/broder.png'


function FooterPlan() {
  useState()
  return <div className="footer-plan">
    <div className="footer-plan__services">
      <div>
        <div className="footer-plan__review-text">
          Revisa nuestros
        </div>
        <div className="footer-plan__services-text">
          servicios y exclusiones
        </div>
      </div>
      <div>
        <img src={broder}/> 
      </div>
    </div>
  </div>
}

export default FooterPlan