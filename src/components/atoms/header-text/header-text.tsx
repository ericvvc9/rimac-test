import classNames from 'classnames';
import './header-text.scss';

interface HeaderTextProps {
  firstText: string | undefined;
  secondText: string | undefined;
  fontSize?: 'small' | 'large' | undefined;
}
export function HeaderText({firstText, secondText,fontSize = 'large'}: HeaderTextProps) {
  return <div className={
    classNames({
      "header-text":true,
      "header-text--large":  fontSize === 'large'
    })}>
    <span className="header-text__first-text">
      {firstText}
    </span>
    <span className="header-text__second-text">
      {' '} {secondText}
    </span>
  </div>
}