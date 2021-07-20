import React, {ReactNode, FC} from 'react';

interface Props {
    link: string;
    title: string;
    icon: ReactNode;
}

const FooterIcon: FC<Props> = (props) => {
    return (
        <div className="footer__item">
            <a href={props.link} target="_blank">{props.title} <span className="icon">{props.icon}</span></a>
        </div>
    );
}

export default FooterIcon;