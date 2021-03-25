import React from 'react';
import Benefits from '../../molecules/benefits/benefits';
import logo from '../../../images/logo.png';
import family from '../../../images/family.png';
import square from '../../../images/square.png';
import './layout.scss';
import classNames from 'classnames';

function Layout({ homePage, children }: { homePage?: boolean, children: React.ReactNode }) {
  return (
    <div className="layout">
      <div className={
        classNames({
          "layout__content": true,
          "layout__content--full": !homePage,
        })}>
        <div className="layout__container">
          <div className="layout__logo">
            <img alt="Logo Rimac" src={logo} />
          </div>
          <img className="layout__background-square" alt="Fondo Rimac" src={square} />
          {
            homePage ?
              <div className="layout__additional-content">
                <div className="layout__main-container">
                  <div className="layout__benefits-wrapper">
                    <div className="layout__title">
                      Seguro de
              </div>
                    <div className="layout__subtitle">
                      Salud
              </div>
                    <Benefits />
                  </div>
                  <div className="layout__family-wrapper">
                    <img className="layout__family-image" alt="Familia Rimac" src={family} />
                  </div>
                </div>
                <footer className="footer">
                  <p className="footer__text">© 2020 RIMAC Seguros y Reaseguros.</p>
                </footer>
              </div>
              :
              <div className="layout__family-wrapper--full">
                <img className="layout__family-image" alt="Familia Rimac" src={family} />
              </div>
          }
        </div>
        <div className="layout__children">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
