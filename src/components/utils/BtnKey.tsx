import React, { useContext } from 'react';
import { LanguageContext } from '@/app/layout';
import useTranslation from '@/hooks/useTranslation';
import Link from 'next/link';;

interface BtnKeyProps {
    textKey: string;
    link: string;
    isActve: boolean
};

const BtnKey: React.FC<BtnKeyProps> = ({ textKey, link, isActve }) => {
    const { lang, setLang } = useContext(LanguageContext);
    const { t } = useTranslation(lang);


    return (
        <Link href={link}>
        <div className={`container-key ${isActve ? 'active' : ''}`}>
            <div className='key'>
                <span className='key-letter'>{t(textKey)}</span>
            </div>
        </div>
        </Link>
    );
};

export default BtnKey;