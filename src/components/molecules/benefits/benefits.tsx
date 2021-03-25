import React, { useState } from 'react';
import './benefits.scss';
import clinic from '../../../images/icons/gl_clinic-20x20.png'
import mobile from '../../../images/icons/gl_mobile-20x20.png'
import money from '../../../images/icons/gl_money-20x20.png'
import shield from '../../../images/icons/gl_shield-20x20.png'
import classnames from 'classnames';

interface Props {

}

interface IBenefits {
  text: string;
  icon: string;
}

const benefitsList:Array<IBenefits> = [
  {
    text: "Cómpralo de manera fácil y rápida",
    icon: clinic
  },
  {
    text: "Cotiza y compra tu seguro 100% digital ",
    icon: mobile
  },
  {
    text: "Hasta S/.12 millones de cobertura anual",
    icon: money
  },
  {
    text: "Más de 300 clínicas en todo el Perú",
    icon: shield
  },
]

const Benefits: React.FC<Props>  = () => {
  const [index, setIndex] = useState<number>(0);
  const previous = () => {
    if(index - 1 >= 0 ) {
      setIndex(index - 1);
    } else {
      setIndex(benefitsList.length - 1);
    }
  }

  const next = () => {
    if(index + 1 < benefitsList.length ) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }
  return (
    <>
      <ul className="benefits">
        {
          benefitsList.map((benefits:IBenefits,benefitIndex) => {
            return <li key={benefitIndex} className={classnames(
              "benefits__list-item", 
              {
                'benefits__list-item-active': benefitIndex === index,
              }
            )}>
              <img alt="icon" className="benefits__list-icon" src={benefits.icon} />
              {benefits.text}
            </li>
          })
        }
        <div className="benefits__pagination">
          <div className="benefits__arrow" onClick={previous}>
            {'<'}
          </div>
          <div className="benefits__number" >
            0{(index + 1)}
          </div>
          <div>/</div>
          <div className="benefits__number-secondary" >
            0{benefitsList.length}
          </div>
          <div className="benefits__arrow" onClick={next}>
            {'>'}
          </div>
        </div>
      </ul>
    </>
  );
}

export default Benefits;
