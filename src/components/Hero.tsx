'use client'
import { LanguageContext } from '@/app/layout';
import useTranslation from '@/hooks/useTranslation';
import React, { useContext } from 'react';
import Image from 'next/image';

const Banner = () => {
    const { lang, setLang } = useContext(LanguageContext);
    const { t } = useTranslation(lang);

    return (
        <>
            <header className='mt-8 flex flex-col gap-6'>
                <h1 className='text-3xl text-color-3 font-semibold'>
                    {t('Banner.h1.before')}
                    <span className='text-color-1'> {t('Banner.h1.strong')}</span>
                    <span className='text-color-3'> {t('Banner.h1.after')}</span>
                    <span className='text-color-1'> {t('Banner.h1.highlight-strong')}</span>
                </h1>
                <h2 className='text-base text-color-2 font-normal'>{t('Banner.h2')}</h2>
            </header>
            <>
                <div className='flex flex-col mt-4'>
                    <Image src='/assets/img/boy.png' alt='Boy' width={350} height={261} />
                    <div className='w-full p-2 h-auto border-color-2 border-2 flex items-center gap-4'>
                        <Image src='/assets/svg/icon-rectangle.svg' alt='Rectangle' width={16} height={16} />
                        <p className='text-base text-color-2'>{t('Banner.texte-img')}
                        <span className='text-color-3'> {t('Banner.texte-img-strong')}</span>
                        </p>
                    </div>
                </div>
            </>
        </>
    );
};

export default Banner;
