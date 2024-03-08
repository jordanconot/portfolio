'use client'
import React, { useContext } from 'react';
import { LanguageContext } from '@/app/layout';
import useTranslation from '@/hooks/useTranslation';
import Image from 'next/image';

const Contact = () => {
    const { lang, setLang } = useContext(LanguageContext);
    const { t } = useTranslation(lang);
    return (
        <section className='flex flex-col gap-6 mt-8'>
            <div className='flex items-center justify-between'>
                <h2 className='text-color-3 text-3xl'><span className='text-color-1 text-3xl'>#</span>{t('Main.contact.contact')}</h2>
            </div>
            <div className='flex flex-col gap-4'>
                    <p className='text-color-2'>{t('Main.contact.text-contact')}</p>
                </div>
                <div className='border-color-2 border'>
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
        </section>
    );
};

export default Contact;