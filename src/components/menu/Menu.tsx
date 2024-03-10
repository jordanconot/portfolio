'use client'

import React, { useContext } from 'react';
import Image from 'next/image';
import { LanguageContext } from '@/app/layout';
import useTranslation from '@/hooks/useTranslation';
import Link from 'next/link';

interface MenuProps {
    closeMenu: () => void;
}

const Menu: React.FC<MenuProps> = ({ closeMenu }) => {
    const { lang, setLang } = useContext(LanguageContext);
    const { t } = useTranslation(lang);
    return (
        <div className='fixed top-0 left-0 w-full h-full flex bg-backgroundColor'>
            <div className='w-full m-4 relative'>
                <nav className='flex items-center justify-between'>
                    <div className='flex gap-4'>
                        <Image src='/assets/svg/logo-default-white.svg' alt='logo' width={16} height={16}></Image>
                        <span className='text-base font-semibold text-color-3'>{t('Nav.name')}</span>
                    </div>
                    <div className='flex gap-4'>
                        {lang === 'fr' && (
                            <button className='text-base font-bold text-color-3' onClick={() => setLang('en')}>EN</button>
                        )}
                        {lang === 'en' && (
                            <button className='text-base font-bold text-color-3' onClick={() => setLang('fr')}>FR</button>
                        )}
                        <Image src='/assets/svg/icon-cross-white.svg' alt='Menu' width={24} height={24} onClick={closeMenu} />
                    </div>
                </nav>
                <div className='mt-10'>
                    <ul className='flex flex-col gap-8'>
                        <Link href='/' className='text-4xl text-color-3 font-medium'>
                            <span className='text-color-1 text-4xl font-medium'>#</span>{t('Nav.home')}</Link>
                        <Link href='/projets' className='text-4xl text-color-3 font-medium'>
                            <span className='text-color-1 text-4xl font-medium'>#</span>{t('Nav.projects')}</Link>
                        <Link href='/a-propos' className='text-4xl text-color-3 font-medium'>
                            <span className='text-color-1 text-4xl font-medium'>#</span>{t('Nav.about')}</Link>
                        <Link href='/contact' className='text-4xl text-color-3 font-medium'>
                            <span className='text-color-1 text-4xl font-medium'>#</span>{t('Nav.contact')}</Link>
                    </ul>
                </div>
                <div className='absolute bottom-0 flex w-full justify-center'>
                    <div className='flex gap-4'>
                        <Image src='/assets/svg/icon-github.svg' alt='logo' width={64} height={64} />
                        <Image src='/assets/svg/icon-linkedin.svg' alt='Email' width={64} height={64} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;