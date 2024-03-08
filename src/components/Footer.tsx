'use client'
import React, { useContext } from 'react';
import { LanguageContext } from '@/app/layout';
import useTranslation from '@/hooks/useTranslation';
import Image from 'next/image';

const Footer = () => {
    const { lang, setLang } = useContext(LanguageContext);
    const { t } = useTranslation(lang);
    return (
        <footer className='border-t border-color-2 mt-14 p-4'>
            <div className='flex justify-center items-center flex-col gap-2'>
                <div className='flex gap-4'>
                    <Image src='/assets/svg/logo-default-white.svg' alt='logo' width={16} height={16} />
                    <span className='text-2xl font-semibold text-color-3'>{t('Footer.name')}</span>
                </div>
                <div className=''>
                    <p className='text-color-2 text-sm'>{t('Footer.text-top')}</p>
                </div>
                <p className='text-color-3 text-2xl'>{t('Footer.media')}</p>
                <div className='flex gap-4'>
                    <Image src='/assets/svg/icon-github.svg' alt='logo' width={32} height={16} />
                    <Image src='/assets/svg/icon-linkedin.svg' alt='Email' width={32} height={32} />
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-color-2 text-xs'>{t('Footer.credit')}</p>
                </div>
                <p className='text-color-2 text-xs'>{t('Footer.copyright')}</p>
            </div>
        </footer>
    );
};

export default Footer;