'use client'
import React, { useContext } from 'react';
import { LanguageContext } from '@/app/layout';
import useTranslation from '@/hooks/useTranslation';
import Image from 'next/image';

const Footer = () => {
    const { lang, setLang } = useContext(LanguageContext);
    const { t } = useTranslation(lang);
    return (
        <footer className='border-t border-color-3 mt-14'>
            <div className='gap-2 mt-8 md:ml-32 md:mr-32'>
                <div className='flex gap-8 flex-col items-center md:justify-between'>
                    <div className='flex flex-col gap-2'>
                        <div className='flex items-center gap-6 justify-center'>
                    <Image src='/assets/svg/logo-default-white.svg' alt='logo' width={16} height={16} />
                    <span className='text-2xl font-semibold text-color-3'>{t('Footer.name')}</span>

                        </div>
                    <p className='text-color-3 text-sm'>{t('Footer.text-top')}</p>

                    </div>
                <div className='flex flex-col'>

                <p className='text-color-3 text-2xl'>{t('Footer.media')}</p>
                <div className='flex gap-4 items-center'>
                    <Image src='/assets/svg/icon-github.svg' alt='logo' width={32} height={16} />
                    <Image src='/assets/svg/icon-linkedin.svg' alt='Email' width={32} height={32} />
                </div>
                </div>
                </div>
                
                <div className='flex flex-col items-center gap-2 my-10'>
                    <p className='text-color-2 text-xs'>{t('Footer.credit')}</p>
                <p className='text-color-2 text-xs'>{t('Footer.copyright')}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;