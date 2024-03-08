'use client'
import { LanguageContext } from '@/app/layout';
import useTranslation from '@/hooks/useTranslation';
import React, { useContext } from 'react';
import Image from 'next/image';

const NavBar = () => {
    const { lang, setLang } = useContext(LanguageContext);
    const { t } = useTranslation(lang);

    return (
        <nav className='flex justify-between'>
            <div className='flex items-center gap-4'>
                <Image src='/assets/svg/logo-default-white.svg' alt='logo' width={16} height={16}></Image>
                <span className='text-base font-semibold text-color-3'>{t('Nav.name')}</span>
            </div>
            <div className='flex items-center gap-4'>
                <button className='text-base font-bold text-color-3' onClick={() => setLang('en')}>EN</button>
                <button className='text-base font-bold text-color-3' onClick={() => setLang('fr')}>FR</button>
                <Image src='/assets/svg/icon-menu-burger.svg' alt='Menu' width={24} height={24} />
            </div>
            
            {/* <h1>{t('Nav.about')}</h1> */}
        </nav>
    );
};

export default NavBar;
