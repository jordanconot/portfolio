'use client'
import React, { useContext } from 'react';
import { LanguageContext } from '@/app/layout';
import useTranslation from '@/hooks/useTranslation';
import Image from 'next/image';

interface ContactProps {
    isContactPage: boolean
}

const Contact: React.FC<ContactProps> = ({ isContactPage }) => {
    const { lang, setLang } = useContext(LanguageContext);
    const { t } = useTranslation(lang);
    return (
        <section className='flex flex-col gap-10 mt-16'>
            <div className='flex items-center'>
                <h2 className='text-color-3 text-3xl font-medium'>
                    <span className='text-color-1 text-3xl'>{isContactPage ? '/' : '#'}</span>{t('Main.contact.contact')}</h2>
                <div className='h-[1px] w-[200px] bg-backgroundColor-nav ml-6 hidden lg:block'></div>
            </div>
            <div className='lg:flex lg:flex-row lg:flex-wrap lg:justify-between'>
                <div className='flex flex-col gap-4 lg:max-w-[50%]'>
                    <p className='text-color-2'>{t('Main.contact.text-contact')}</p>
                    {isContactPage && (
                        <p className='text-color-2'>{t('Main.contact.text-contact-after')}</p>
                    )}
                </div>
                <div className='border-color-2 border flex mt-6 w-full md:max-w-max'>
                    <div className='p-4 flex flex-col gap-4'>
                        <p className='text-color-3'>{t('Main.contact.message')}</p>
                        <div className='flex items-center gap-2'>
                            <Image src='/assets/svg/icon-email.svg' alt='Email' width={32} height={32} />
                            <p className='text-color-2'>{t('Main.contact.email')}</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Image src='/assets/svg/icon-linkedin.svg' alt='Email' width={32} height={32} />
                            <p className='text-color-2'>{t('Main.contact.linkedin')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;