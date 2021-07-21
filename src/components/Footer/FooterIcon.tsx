// eslint-disable-next-line no-use-before-define
import React, { ReactNode, FC } from 'react';

interface PropsForIcons {
  link: string;
  title: string;
  icon: ReactNode;
}

const FooterIcon: FC<PropsForIcons> = (props) => (
  // eslint-disable-next-line react/jsx-filename-extension
  <div className="footer__item">
    {/* eslint-disable-next-line react/destructuring-assignment,react/prop-types */}
    <a href={props.link} target="_blank" rel="noreferrer">
      {/* eslint-disable-next-line react/prop-types,react/destructuring-assignment */}
      {props.title}
      {/* eslint-disable-next-line react/prop-types,react/destructuring-assignment */}
      <span className="icon">{props.icon}</span>
    </a>
  </div>
);

export default FooterIcon;
