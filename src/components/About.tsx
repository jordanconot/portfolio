'use client'
import React, { useContext } from 'react';
import { LanguageContext } from '@/app/layout';
import useTranslation from '@/hooks/useTranslation';
import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import Btn from './utils/Btn';

interface AboutProps {
    isAboutPage: boolean,
}

const About: React.FC<AboutProps> = ({ isAboutPage }) => {
    const { lang, setLang } = useContext(LanguageContext);
    const { t } = useTranslation(lang);
    const { ref, inView } = useInView({ threshold: 0 });
    const [ref2, inView2] = useInView({ threshold: 0.8 });

    const maskContainerStyles: React.CSSProperties = {
        position: 'relative',
        overflow: 'hidden',
    };

    const imageStyles: React.CSSProperties = {
        transform: inView ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform 0.7s ease-in-out',
        position: 'sticky',
        top: '-50vh',
        zIndex: 10,
    };
    return (
        <section className='flex flex-col gap-10 mt-16 lg:mt-36 relative'>
            <div className='flex items-center'>
                <h2 className='text-color-3 text-3xl font-medium'><span className='text-color-1 text-3xl'>
                    {isAboutPage ? '/' : '#'}</span>{t('Main.about.about')}</h2>
                <div className='h-[1px] w-[420px] bg-backgroundColor-nav ml-6 hidden lg:block'></div>
            </div>
            <div className='lg:flex lg:flex-row lg:flex-wrap lg:justify-between'>
                <div ref={ref2} className={`flex flex-col gap-4 lg:max-w-[50%] lg:gap-6 lg:justify-center 2xl:justify-center animate__animated ${inView2 ? 'animate__fadeIn' : 'opacity-0'}`}>
                    <p className='text-color-3 font-semibold 2xl:text-2xl'>{t('Main.about.text-welcome')}</p>
                    <p className='text-color-2'>{t('Main.about.text')}</p>
                    <p className='text-color-2'>{t('Main.about.text-after')}</p>
                    {isAboutPage && (
                        <span className='text-color-2'>{t('Page-about.text')}</span>
                    )}
                    <div>
                        <Btn link={`${isAboutPage ? 'mailto:jordan.conot.dev@gmail.com?subject=Demande de renseignement depuis le portfolio 🤗' : '/a-propos'}`} textKey={`${isAboutPage ? 'Main.contact.contact-me' : 'Main.about.more'}`}
                        />
                    </div>
                </div>
                <div style={maskContainerStyles}>
                    <div ref={ref} className='z-10 mt-8 flex-col flex items-center md:justify-end lg:justify-center sticky top-[50vh]' style={imageStyles}>
                        <Image src='/assets/img/about-me.webp' alt='Boy' width={339} height={507} />
                    </div>
                    <div className='h-[1px] w-full bg-backgroundColor-nav absolute bottom-0 left-0 z-20 lg:w-full'></div>
                </div>
            </div>
        </section>
    );
};

export default About;