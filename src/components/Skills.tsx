'use client'
import React, { useContext } from 'react';
import { LanguageContext } from '@/app/layout';
import useTranslation from '@/hooks/useTranslation';

const Skills = () => {
    const { lang, setLang } = useContext(LanguageContext);
    const { t } = useTranslation(lang);
    return (
        <section className='flex flex-col gap-6 mt-8'>
             <div className='flex items-center justify-between'>
                    <h2 className='text-color-3 text-3xl'><span className='text-color-1 text-3xl'>#</span>{t('Main.skills.skills')}</h2>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='border-color-2 border flex flex-col'>
                        <span className='font-semibold text-color-3 p-2'>{t('Main.skills.title-languages')}</span>
                        <div className='border-color-2 border border-x-0 border-b-0'>
                            <p className='text-color-2 p-2'>{t('Main.skills.languages')}</p>
                        </div>
                    </div>

                    <div className='border-color-2 border flex flex-col'>
                        <span className='font-semibold text-color-3 p-2'>{t('Main.skills.title-frameworks')}</span>
                        <div className='border-color-2 border border-x-0 border-b-0'>
                            <p className='text-color-2 p-2'>{t('Main.skills.frameworks')}</p>
                        </div>
                    </div>

                    <div className='border-color-2 border flex flex-col'>
                        <span className='font-semibold text-color-3 p-2'>{t('Main.skills.title-databases')}</span>
                        <div className='border-color-2 border border-x-0 border-b-0'>
                            <p className='text-color-2 p-2'>{t('Main.skills.databases')}</p>
                        </div>
                    </div>

                    <div className='border-color-2 border flex flex-col'>
                        <span className='font-semibold text-color-3 p-2'>{t('Main.skills.title-others')}</span>
                        <div className='border-color-2 border border-x-0 border-b-0'>
                            <p className='text-color-2 p-2'>{t('Main.skills.others')}</p>
                        </div>
                    </div>

                    <div className='border-color-2 border flex flex-col'>
                        <span className='font-semibold text-color-3 p-2'>{t('Main.skills.title-tools')}</span>
                        <div className='border-color-2 border border-x-0 border-b-0'>
                            <p className='text-color-2 p-2'>{t('Main.skills.tools')}</p>
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default Skills;