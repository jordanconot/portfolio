'use client'
import React, { useContext } from 'react';
import { LanguageContext } from '@/app/layout';
import useTranslation from '@/hooks/useTranslation';
import Image from 'next/image';

const About = () => {
    const { lang, setLang } = useContext(LanguageContext);
    const { t } = useTranslation(lang);
    const arrow = `->`
    return (
        <section className='flex flex-col gap-6 mt-8'>
            <div className='flex items-center justify-between'>
                <h2 className='text-color-3 text-3xl'><span className='text-color-1 text-3xl'>#</span>{t('Main.about.about')}</h2>
            </div>
            <div className='flex flex-col gap-4'>
                <p className='text-color-3 font-semibold'>{t('Main.about.text-welcome')}</p>
                <p className='text-color-2'>{t('Main.about.text')}</p>
            </div>
            <button className='text-color-3 border-color-1 border px-4 py-2 uppercase w-[55%]'>
                {t('Main.about.more')} {arrow}
            </button>
            <div className='relative'>
                <Image src='/assets/img/boy-about.png' alt='Boy' width={339} height={507} />
                <Image className='absolute top-12 left-0' src='/assets/img/dots-5.png' alt='Boy' width={84} height={84} />
                <Image className='absolute right-0 bottom-40' src='/assets/img/dots-4.png' alt='Boy' width={104} height={56} />
            </div>
        </section>
    );
};

export default About;