'use client'
import React, { useContext } from 'react';
import { LanguageContext } from '@/app/layout';
import useTranslation from '@/hooks/useTranslation';
import Image from 'next/image';
import Link from 'next/link';

interface footerProps {
    isContactPage: boolean
};

const Footer: React.FC<footerProps> = ({ isContactPage }) => {
    const { lang, setLang } = useContext(LanguageContext);
    const { t } = useTranslation(lang);
    return (
        
        <footer className={`${isContactPage ? 'xl:absolute xl:w-full xl:bottom-0' : ''} border-t border-color-3 mt-14`}>
            <div className='gap-2 mt-8 md:ml-32 md:mr-32'>
                <div className='flex gap-8 flex-col items-center md:justify-between lg:flex-row'>
                    <div className='flex flex-col gap-2 lg:items-start'>
                        <div className='flex items-center gap-6 justify-center'>
                            <Link className='hover:opacity-50' href='/'>
                                <Image src='/assets/svg/logo-default-white.svg' alt='logo' width={16} height={16} />
                            </Link>
                            <Link className='hover:opacity-50' href='/'>
                                <span className='text-2xl font-semibold text-color-3'>{t('Footer.name')}</span>
                            </Link>

                        </div>
                        <p className='text-color-2 text-sm'>{t('Footer.text-top')}</p>

                    </div>
                    <div className='flex flex-col lg:items-start'>

                        <p className='text-color-3 text-2xl font-semibold'>{t('Footer.media')}</p>
                        <div className='flex gap-4 items-center'>
                            <a href='https://github.com/jordanconot' target='_blank'>
                                <Image className='hover:opacity-50' src='/assets/svg/icon-github.svg' alt='logo' width={32} height={16} />
                            </a>
                            <a href='https://www.linkedin.com/in/jordanconot/' target='_blank'>
                                <Image className='hover:opacity-50' src='/assets/svg/icon-linkedin.svg' alt='Email' width={32} height={32} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col items-center gap-2 my-10 lg:flex-col'>
                    <p className='text-color-2 text-xs'>{t('Footer.credit')}</p>
                    <p className='text-color-2 text-xs'>{t('Footer.copyright')}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;