import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram, faTelegramPlane, faFacebookF, faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import FooterIcon from './FooterIcon';

const Footer = () => {
  const icons = [
    {
      title: 'Facebook',
      icon: <FontAwesomeIcon icon={faFacebookF} />,
      link: 'https://ru-ru.facebook.com/NASA/',
    },
    {
      title: 'Instagram',
      icon: <FontAwesomeIcon icon={faInstagram} />,
      link: 'https://www.instagram.com/nasa/',
    },
    {
      title: 'Telegram',
      icon: <FontAwesomeIcon icon={faTelegramPlane} />,
      link: 'https://telegram.me/s/NASA_gov1?before=210',
    },
    {
      title: 'Twitter',
      icon: <FontAwesomeIcon icon={faTwitter} />,
      link: 'https://twitter.com/nasa',
    },

  ];

  return (
    <footer className="footer">
      <div className="footer__section">
        {icons.map((icon) => (
          <FooterIcon title={icon.title} icon={icon.icon} link={icon.link} />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
