'use client'
import { LanguageContext } from '@/app/layout';
import useTranslation from '@/hooks/useTranslation';
import React, { useContext } from 'react';
import Image from 'next/image';
import Btn from './utils/Btn';

const Banner = () => {
    const { lang, setLang } = useContext(LanguageContext);
    const { t } = useTranslation(lang);

    return (
        <>
            <header className='mt-12 flex flex-col gap-6 lg:flex-row lg:gap-14 lg:mt-36  xl:justify-between 2xl:gap-36 2xl:justify-start'>
                <div className='flex flex-col gap-8 lg:flex lg:flex-col lg:justify-center lg:w-1/2 lg:gap-10'>
                    <h1 className='text-3xl text-color-3 font-semibold md:text-4xl animate__animated animate__fadeInLeft animate__delay-1s '>
                        {t('Banner.h1.before')}
                        <span className='text-color-1 md:text-4xl'> {t('Banner.h1.strong')}</span>
                        <span className='text-color-3 md:text-4xl'> {t('Banner.h1.after')}</span>
                        <span className='text-color-1 md:text-4xl'> {t('Banner.h1.highlight-strong')}</span>
                    </h1>
                    <h2 className='text-base text-color-2 font-normal animate__animated animate__fadeInLeft animate__delay-2s'>{t('Banner.h2')}</h2>
                    <div className='animate__animated animate__fadeInLeft animate__delay-3s max-w-max'>
                        <Btn  textKey='Main.contact.contact-me' link='mailto:jordan.conot.dev@gmail.com?subject=Demande de renseignement depuis le portfolio 🤗' />
                    </div>
                </div>
                <div className='mt-4 flex w-full animate__animated animate__fadeInRight animate__delay-1s   md:items-center lg:w-auto'>
                    <div className='w-full lg:w-auto'>
                        <Image className='md:w-full' src='/assets/img/boy.png' alt='Boy' width={400} height={261} />
                        <div className='p-1 text-center border-color-2 border text-sm'>
                            <div className='flex items-center'>
                                <Image className='mr-4' src='/assets/svg/icon-rectangle.svg' alt='Rectangle' width={16} height={16} />
                                <p className='text-sm text-color-2 flex flex-col items-start md:flex-row md:gap-3'>{t('Banner.texte-img')}
                                    <span className='text-color-3 text-sm'> {t('Banner.texte-img-strong')}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className='p-0 m-0 box-border w-[85%] mx-auto mt-16 animate__animated animate__zoomInDown animate__delay-1s hidden lg:block'>
                <fieldset className='border border-color-2 pl-[2%] border-b-0'>
                    <p className='text-2xl text-center text-color-3 p-3 pt-1 font-normal'>{t('Banner.citation')}</p>
                    <legend>
                        <Image src='/assets/svg/icon-legend.svg' alt='Guillemet' width={25} height={20} />
                    </legend>
                </fieldset>
                <fieldset className='border-t border-color-2 pl-[95%] mt-[-0.6rem]'>
                    <legend>
                        <Image src='/assets/svg/icon-legend.svg' alt='Guillemet' width={25} height={20} />
                    </legend>
                </fieldset>
                <div className='border border-color-2 border-t-0 -mt-2 ml-[70%]'>
                    <p className=' text-2xl text-center p-3 text-color-3 font-normal'>{t('Banner.author')}</p>
                </div>
            </div>
        </>
    );
};

export default Banner;
