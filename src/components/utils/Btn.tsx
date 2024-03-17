import React, { useContext } from 'react';
import { LanguageContext } from '@/app/layout';
import useTranslation from '@/hooks/useTranslation';

interface BtnProps {
    textKey: string;
    link: string;
    showArrow?: boolean
};

const Btn: React.FC<BtnProps> = ({ textKey, link, showArrow }) => {
    const { lang, setLang } = useContext(LanguageContext);
    const { t } = useTranslation(lang);
    const arrow = showArrow ? ` ~~> ` : '';
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <div className='container-btn'>
                <div className='btn'>
                    <span className="btn-text">{t(textKey)} {arrow}</span>
                </div>
            </div>
        </a>
    );
};

export default Btn;