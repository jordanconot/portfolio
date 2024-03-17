import React, { useContext } from 'react';
import { LanguageContext } from '@/app/layout';
import useTranslation from '@/hooks/useTranslation';

interface BtnProps {
    textKey: string;
    link: string;
    showArrow?: boolean;
    width?: string;
};



const Btn: React.FC<BtnProps> = ({ textKey, link, showArrow, width }) => {
    const { lang, setLang } = useContext(LanguageContext);
    const { t } = useTranslation(lang);
    const arrow = showArrow ? ` ~~> ` : '';

    const btnStyle: React.CSSProperties = {};
    if (width) {
      btnStyle.width = width;
    }
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <div className='container-btn' style={btnStyle}>
                <div className='btn'>
                    <span className="btn-text">{t(textKey)} {arrow}</span>
                </div>
            </div>
        </a>
    );
};

export default Btn;