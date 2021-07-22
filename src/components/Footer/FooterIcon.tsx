import React, { ReactNode, FC } from 'react';

interface PropsForIcons {
  link: string;
  title: string;
  icon: ReactNode;
}

const FooterIcon: FC<PropsForIcons> = ({ link, title, icon }) => (
  <div className="footer__item">
    <a href={link} target="_blank" rel="noreferrer">
      {title}
      <span className="icon">{icon}</span>
    </a>
  </div>
);

export default FooterIcon;
