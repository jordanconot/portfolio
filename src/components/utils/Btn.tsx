import React, { useContext } from 'react';
import { LanguageContext } from '@/app/layout';
import useTranslation from '@/hooks/useTranslation';

interface BtnProps {
    textKey: string;
    link: string;
    showArrow?: boolean
};

const Btn: React.FC<BtnProps> = ({ textKey, link, showArrow}) => {
    const { lang, setLang } = useContext(LanguageContext);
    const { t } = useTranslation(lang);
    const arrow = showArrow ? ` ~~> ` : '';
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
        <button className="before:ease px-4 py-2 uppercase relative overflow-hidden border text-color-3 border-color-1 before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-white before:transition-all before:duration-300 hover:text-black hover:font-medium hover:before:-rotate-180">
            <span className="relative z-10">{t(textKey)} {arrow}</span>
        </button>
        </a>
    );
};

export default Btn;