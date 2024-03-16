'use client'
import React, { useContext } from 'react';
import { LanguageContext } from '@/app/layout';
import useTranslation from '@/hooks/useTranslation';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

interface ContactProps {
    isContactPage: boolean,
    isHomePage: boolean
}

const Contact: React.FC<ContactProps> = ({ isContactPage, isHomePage }) => {
    const { lang, setLang } = useContext(LanguageContext);
    const { t } = useTranslation(lang);
    const { ref, inView } = useInView({ threshold: 0 });
    const [ref2, inView2] = useInView({ threshold: 0.2, triggerOnce: true });

    return (
        <section className='flex flex-col gap-10 mt-16 lg:mt-36'>
            <div className='flex items-center'>
                <h2 className='text-color-3 text-3xl font-medium'>
                    <span className='text-color-1 text-3xl'>{isContactPage ? '/' : '#'}</span>{t('Main.contact.contact')}</h2>
                <div className='h-[1px] w-[200px] bg-backgroundColor-nav ml-6 hidden lg:block'></div>
            </div>
            <div className='lg:flex lg:flex-row lg:flex-wrap lg:justify-between'>
                <div ref={ref} className={`flex flex-col gap-6 lg:max-w-[50%] animate__animated ${inView ? 'animate__fadeIn' : 'opacity-0'} `}>
                    <p className='text-color-2'>{t('Main.contact.text-contact')}</p>
                    {isHomePage && (
                        <p className='text-color-2'>{t('Main.contact.text-contact-after')}</p>
                    )}
                    
                    {isContactPage && (
                        <>
                            <p className='text-color-2'>{t('Main.contact.text-contact-after')}</p>
                            <p className='text-color-2'>{t('Main.contact.text-contact-after-after')}</p>
                            <p className='text-color-2'>{t('Main.contact.text-contact-end')}</p>
                        </>
                    )}
                </div>
                <div ref={ref2} className={`border-color-2 border flex mt-6 h-max w-max animate__animated ${inView2 ? 'animate__jackInTheBox' : 'opacity-0'}`}>
                    <div className='p-4 flex flex-col gap-4'>
                        <p className='text-color-3'>{t('Main.contact.message')}</p>
                        <div className='flex items-center gap-2'>
                            <a className='flex items-center gap-2' href='mailto:jordan.conot.dev@gmail.com?subject=Demande de renseignement depuis le portfolio 🤗'>
                                <Image src='/assets/svg/icon-email.svg' alt='Email' width={32} height={32} />
                                <p className='text-color-2 hover:opacity-50'>{t('Main.contact.email')}</p>
                            </a>
                        </div>
                        <div className='flex items-center gap-2'>
                            <a className='flex items-center gap-2' href='https://www.linkedin.com/in/jordanconot/' target='_blank'>
                                <Image src='/assets/svg/icon-linkedin.svg' alt='Email' width={32} height={32} />
                                <p className='text-color-2 hover:opacity-50'>{t('Main.contact.linkedin')}</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;