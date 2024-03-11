'use client'
import React, { useContext } from 'react';
import { LanguageContext } from '@/app/layout';
import useTranslation from '@/hooks/useTranslation';
import Image from 'next/image';
import Skills from './Skills';

interface AboutProps {
    isAboutPage: boolean,
}

const About: React.FC<AboutProps> = ({ isAboutPage }) => {
    const { lang, setLang } = useContext(LanguageContext);
    const { t } = useTranslation(lang);
    const arrow = `->`

    return (
        <section className='flex flex-col gap-10 mt-16'>
            <div className='flex items-center'>
                <h2 className='text-color-3 text-3xl font-medium'><span className='text-color-1 text-3xl'>
                    {isAboutPage ? '/' : '#'}</span>{t('Main.about.about')}</h2>
                    <div className='h-[1px] w-[420px] bg-backgroundColor-nav ml-6 hidden lg:block'></div>
            </div>
            <div className='lg:flex lg:flex-row lg:flex-wrap lg:justify-between'>
            <div className='flex flex-col gap-4 lg:max-w-[50%] lg:gap-12'>
                <p className='text-color-3 font-semibold'>{t('Main.about.text-welcome')}</p>
                <p className='text-color-2'>{t('Main.about.text')}</p>
                <p className='text-color-2'>{t('Main.about.text-after')}</p>
                {isAboutPage && (
                    <span className='text-color-2'>{t('Page-about.text')}</span>
                )}
            <button className='text-color-3 border-color-1 border px-4 py-2 uppercase w-[55%]'>
                {isAboutPage ? t('Main.contact.contact-me') : t('Main.about.more')}
            </button>
         
            </div>
            <div className='relative z-10 mt-8 md:flex md:justify-end'>
                <Image src='/assets/img/about-me.webp' alt='Boy' width={339} height={507} />
                <div className='absolute h-[1px] bottom-0 right-6 w-64 bg-backgroundColor-nav'></div>
            </div>
            </div>
        </section>
    );
};

export default About;