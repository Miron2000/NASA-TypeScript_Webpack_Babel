import React, {ReactNode, FC} from 'react';

interface PropsForIcons {
    link: string;
    title: string;
    icon: ReactNode;
}

const FooterIcon: FC<PropsForIcons> = (props) => {
    return (
        <div className="footer__item">
            <a href={props.link} target="_blank">{props.title} <span className="icon">{props.icon}</span></a>
        </div>
    );
}

export default FooterIcon;