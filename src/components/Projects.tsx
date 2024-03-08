'use client'
import React, { useContext } from 'react';
import Image from 'next/image';
import { LanguageContext } from '@/app/layout';
import useTranslation from '@/hooks/useTranslation';

const Projects = () => {
    const { lang, setLang } = useContext(LanguageContext);
    const { t } = useTranslation(lang);
    const arrow = `~~>`;

    return (
        <section className='flex flex-col gap-6'>
            <div className='flex items-center justify-between'>
                <h2 className='text-color-3 text-3xl'><span className='text-color-1 text-3xl'>#</span>{t('Main.h2')}</h2>
                <span className='text-color-3'>{t('Main.span')} {arrow}</span>
            </div>
            <div className='border-color-2 border flex flex-col'>
                <div className='w-full h-40 flex'>
                    <Image src='/assets/img/sport-see.jpg' alt='Projet sport see' width={333} height={160} />
                </div>
                <div className='border-color-2 border flex p-2 border-x-0'>
                    <p className='text-color-2 uppercase pl-2'>{t('Main.card.language')}</p>
                </div>
                <div className='flex flex-col gap-4 p-4'>
                    <p className='uppercase text-color-3 text-2xl font-medium'>{t('Main.card.title')}</p>
                    <p className='text-color-2'>{t('Main.card.description')}</p>
                    <div className='flex flex-row gap-4'>
                        <button className='text-color-3 border-color-1 border px-4 py-2 uppercase'>
                            {t('Main.card.btn-live')} {arrow}
                        </button>
                        <button className='text-color-3 border-color-1 border px-4 py-2 uppercase'>
                            {t('Main.card.btn-github')} {arrow}
                        </button>
                    </div>
                </div>
            </div>

            <div className='border-color-2 border flex flex-col'>
                <div className='w-full h-40 flex'>
                    <Image src='/assets/img/sport-see.jpg' alt='Projet sport see' width={333} height={160} />
                </div>
                <div className='border-color-2 border flex p-2 border-x-0'>
                    <p className='text-color-2 uppercase pl-2'>{t('Main.card.language')}</p>
                </div>
                <div className='flex flex-col gap-4 p-4'>
                    <p className='uppercase text-color-3 text-2xl font-medium'>{t('Main.card.title')}</p>
                    <p className='text-color-2'>{t('Main.card.description')}</p>
                    <div className='flex flex-row gap-4'>
                        <button className='text-color-3 border-color-1 border px-4 py-2 uppercase'>
                            {t('Main.card.btn-live')} {arrow}
                        </button>
                        <button className='text-color-3 border-color-1 border px-4 py-2 uppercase'>
                            {t('Main.card.btn-github')} {arrow}
                        </button>
                    </div>
                </div>
            </div>

            <div className='border-color-2 border flex flex-col'>
                <div className='w-full h-40 flex'>
                    <Image src='/assets/img/sport-see.jpg' alt='Projet sport see' width={333} height={160} />
                </div>
                <div className='border-color-2 border flex p-2 border-x-0'>
                    <p className='text-color-2 uppercase pl-2'>{t('Main.card.language')}</p>
                </div>
                <div className='flex flex-col gap-4 p-4'>
                    <p className='uppercase text-color-3 text-2xl font-medium'>{t('Main.card.title')}</p>
                    <p className='text-color-2'>{t('Main.card.description')}</p>
                    <div className='flex flex-row gap-4'>
                        <button className='text-color-3 border-color-1 border px-4 py-2 uppercase'>
                            {t('Main.card.btn-live')} {arrow}
                        </button>
                        <button className='text-color-3 border-color-1 border px-4 py-2 uppercase'>
                            {t('Main.card.btn-github')} {arrow}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;