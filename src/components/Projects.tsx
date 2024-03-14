'use client'
import React, { useContext } from 'react';
import Image from 'next/image';
import { LanguageContext } from '@/app/layout';
import useTranslation from '@/hooks/useTranslation';
import Link from 'next/link';

interface ProjectsProps {
    isProjectsPage: boolean
}

const Projects: React.FC<ProjectsProps> = ({ isProjectsPage }) => {
    const { lang, setLang } = useContext(LanguageContext);
    const { t } = useTranslation(lang);
    const arrow = `~~>`;

    return (
        <section className='flex flex-col gap-10 mt-16'>
            <div className='flex items-center justify-between'>
                <h2 className='text-color-3 text-3xl font-medium lg:flex lg:items-center'>
                    <span className='text-color-1 text-3xl'>{isProjectsPage ? '/' : '#'}</span>{t('Main.h2')}
                    <div className='h-[1px] w-[420px] bg-backgroundColor-nav ml-6 hidden lg:block'></div>
                </h2>
                {!isProjectsPage && (
                    <Link href='/projets'>
                        <span className='text-color-3'>{t('Main.span')} {arrow}</span>
                    </Link>
                )}
            </div>
            {isProjectsPage && (
                <>
                    <p className='text-color-3'>{t('Page-projects.my-projects')}</p>
                    <p className='text-color-3 text-3xl font-medium'>
                        <span className='text-color-1 text-3xl'>
                            #
                        </span>{t('Page-projects.complets-apps')}</p>
                </>
            )}

            <div className='lg: flex flex-wrap justify-between gap-10'>


                <div className='border-color-2 border flex flex-col lg:w-[47%] xl:w-[30%]'>
                    <div className='h-60 flex'>
                        <Image className='lg:h-60' src='/assets/img/sport-see.jpg' alt='Projet sport see' width={1920} height={1080} />
                    </div>
                    <div className='border-color-2 border flex p-2 border-x-0'>
                        <p className='text-color-2 uppercase pl-2'>{t('Main.card.language')}</p>
                    </div>
                    <div className='flex flex-col gap-4 p-4'>
                        <p className='uppercase text-color-3 text-2xl font-medium'>{t('Main.card.title')}</p>
                        <p className='text-color-2'>{t('Main.card.description')}</p>
                        <div className='flex flex-row gap-4'>
                            <button className='text-color-3 border-color-1 border px-4 py-2 uppercase'>
                                {t('Main.btn-live')} {arrow}
                            </button>
                            <button className='text-color-3 border-color-1 border px-4 py-2 uppercase'>
                                {t('Main.btn-github')} {arrow}
                            </button>
                        </div>
                    </div>
                </div>

                <div className='border-color-2 border flex flex-col lg:w-[47%] xl:w-[30%]'>
                    <div className='h-60 flex'>
                        <Image className='lg:h-60' src='/assets/img/kasa.png' alt='Projet Kasa' width={1920} height={1080} />
                    </div>
                    <div className='border-color-2 border flex p-2 border-x-0'>
                        <p className='text-color-2 uppercase pl-2'>{t('Main.card.card-2.language')}</p>
                    </div>
                    <div className='flex flex-col gap-4 p-4'>
                        <p className='uppercase text-color-3 text-2xl font-medium'>{t('Main.card.card-2.title')}</p>
                        <p className='text-color-2'>{t('Main.card.card-2.description')}</p>
                        <div className='flex flex-row gap-4'>
                            <button className='text-color-3 border-color-1 border px-4 py-2 uppercase'>
                                {t('Main.btn-live')} {arrow}
                            </button>
                            <button className='text-color-3 border-color-1 border px-4 py-2 uppercase'>
                                {t('Main.btn-github')} {arrow}
                            </button>
                        </div>
                    </div>
                </div>

                <div className='border-color-2 border flex flex-col lg:w-[47%] xl:w-[30%]'>
                    <div className='h-60 flex'>
                        <Image className='lg:h-60' src='/assets/img/les-petits-plats.jpg' alt='Projet Les petits plats' width={1920} height={1080} />
                    </div>
                    <div className='border-color-2 border flex p-2 border-x-0'>
                        <p className='text-color-2 uppercase pl-2'>{t('Main.card.card-3.language')}</p>
                    </div>
                    <div className='flex flex-col gap-4 p-4'>
                        <p className='uppercase text-color-3 text-2xl font-medium'>{t('Main.card.card-3.title')}</p>
                        <p className='text-color-2'>{t('Main.card.card-3.description')}</p>
                        <div className='flex flex-row gap-4'>
                            <Link href='https://jordanconot.github.io/les-petits-plats/' target='_blank'>
                                <button className='text-color-3 border-color-1 border px-4 py-2 uppercase'>
                                    {t('Main.btn-live')} {arrow}
                                </button>
                            </Link>
                            <Link href='https://github.com/jordanconot/les-petits-plats' target='_blank'>
                                <button className='text-color-3 border-color-1 border px-4 py-2 uppercase'>
                                    {t('Main.btn-github')} {arrow}
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='border-color-2 border flex flex-col lg:w-[47%] xl:w-[30%]'>
                    <div className='h-60 flex'>
                        <Image className='lg:h-60' src='/assets/img/oh-my-food.jpg' alt='Projet Oh my food' width={1920} height={1080} />
                    </div>
                    <div className='border-color-2 border flex p-2 border-x-0'>
                        <p className='text-color-2 uppercase pl-2'>{t('Main.card.card-4.language')}</p>
                    </div>
                    <div className='flex flex-col gap-4 p-4'>
                        <p className='uppercase text-color-3 text-2xl font-medium'>{t('Main.card.card-4.title')}</p>
                        <p className='text-color-2'>{t('Main.card.card-4.description')}</p>
                        <div className='flex flex-row gap-4'>
                            <button className='text-color-3 border-color-1 border px-4 py-2 uppercase'>
                                {t('Main.btn-live')} {arrow}
                            </button>
                            <button className='text-color-3 border-color-1 border px-4 py-2 uppercase'>
                                {t('Main.btn-github')} {arrow}
                            </button>
                        </div>
                    </div>
                </div>

                <div className='border-color-2 border flex flex-col lg:w-[47%] xl:w-[30%]'>
                    <div className='h-60 flex'>
                        <Image className='lg:h-60' src='/assets/img/fisheye.png' alt='Projet Fisheye' width={1920} height={1080} />
                    </div>
                    <div className='border-color-2 border flex p-2 border-x-0'>
                        <p className='text-color-2 uppercase pl-2'>{t('Main.card.card-5.language')}</p>
                    </div>
                    <div className='flex flex-col gap-4 p-4'>
                        <p className='uppercase text-color-3 text-2xl font-medium'>{t('Main.card.card-5.title')}</p>
                        <p className='text-color-2'>{t('Main.card.card-5.description')}</p>
                        <div className='flex flex-row gap-4'>
                            <button className='text-color-3 border-color-1 border px-4 py-2 uppercase'>
                                {t('Main.btn-live')} {arrow}
                            </button>
                            <button className='text-color-3 border-color-1 border px-4 py-2 uppercase'>
                                {t('Main.btn-github')} {arrow}
                            </button>
                        </div>
                    </div>
                </div>

                <div className='border-color-2 border flex flex-col lg:w-[47%] xl:w-[30%]'>
                    <div className='h-60 flex'>
                        <Image className='lg:h-60' src='/assets/img/reservia.png' alt='Projet Réservia' width={1920} height={1080} />
                    </div>
                    <div className='border-color-2 border flex p-2 border-x-0'>
                        <p className='text-color-2 uppercase pl-2'>{t('Main.card.card-6.language')}</p>
                    </div>
                    <div className='flex flex-col gap-4 p-4'>
                        <p className='uppercase text-color-3 text-2xl font-medium'>{t('Main.card.card-6.title')}</p>
                        <p className='text-color-2'>{t('Main.card.card-6.description')}</p>
                        <div className='flex flex-row gap-4'>
                            <button className='text-color-3 border-color-1 border px-4 py-2 uppercase'>
                                {t('Main.btn-live')} {arrow}
                            </button>
                            <button className='text-color-3 border-color-1 border px-4 py-2 uppercase'>
                                {t('Main.btn-github')} {arrow}
                            </button>
                        </div>
                    </div>
                </div>


            </div>
            {isProjectsPage && (
                <>
                    <p className='text-color-3 text-3xl font-medium mt-8'><span className='text-color-1 text-3xl'>#</span>{t('Page-projects.small-projects')}</p>
                    <div className='lg: flex flex-col justify-between gap-10 lg:flex-wrap lg:flex-row'>
                        <div className='border-color-2 border flex flex-col lg:w-[47%] xl:w-[30%]'>
                            <div className='w-full h-40 hidden'>
                                <Image className='lg: w-full lg:h-80' src='/assets/img/sport-see.jpg' alt='Projet sport see' width={333} height={160} />
                            </div>
                            <div className='border-color-2 border flex p-2 border-x-0'>
                                <p className='text-color-2 uppercase pl-2'>{t('Page-projects.card-1.language')}</p>
                            </div>
                            <div className='flex flex-col gap-4 p-4'>
                                <p className='uppercase text-color-3 text-2xl font-medium'>{t('Page-projects.card-1.title')}</p>
                                <p className='text-color-2'>{t('Page-projects.card-1.description')}</p>
                                <div className='flex flex-row gap-4'>
                                    <button className='text-color-3 border-color-1 border px-4 py-2 uppercase'>
                                        {t('Main.btn-live')} {arrow}
                                    </button>
                                    <button className='text-color-3 border-color-1 border px-4 py-2 uppercase'>
                                        {t('Main.btn-github')} {arrow}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className='border-color-2 border flex flex-col lg:w-[47%] xl:w-[30%]'>
                            <div className='w-full h-40 hidden'>
                                <Image className='lg:w-full lg:h-80' src='/assets/img/sport-see.jpg' alt='Projet sport see' width={333} height={160} />
                            </div>
                            <div className='border-color-2 border flex p-2 border-x-0'>
                                <p className='text-color-2 uppercase pl-2'>{t('Page-projects.card-2.language')}</p>
                            </div>
                            <div className='flex flex-col gap-4 p-4'>
                                <p className='uppercase text-color-3 text-2xl font-medium'>{t('Page-projects.card-2.title')}</p>
                                <p className='text-color-2'>{t('Page-projects.card-2.description')}</p>
                                <div className='flex flex-row gap-4'>
                                    <button className='text-color-3 border-color-1 border px-4 py-2 uppercase'>
                                        {t('Main.btn-live')} {arrow}
                                    </button>
                                    <button className='text-color-3 border-color-1 border px-4 py-2 uppercase'>
                                        {t('Main.btn-github')} {arrow}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className='border-color-2 border flex flex-col lg:w-[47%] xl:w-[30%]'>
                            <div className='w-full h-40 hidden'>
                                <Image className='lg:w-full lg:h-80' src='/assets/img/sport-see.jpg' alt='Projet sport see' width={333} height={160} />
                            </div>
                            <div className='border-color-2 border flex p-2 border-x-0'>
                                <p className='text-color-2 uppercase pl-2'>{t('Page-projects.card-3.language')}</p>
                            </div>
                            <div className='flex flex-col gap-4 p-4'>
                                <p className='uppercase text-color-3 text-2xl font-medium'>{t('Page-projects.card-3.title')}</p>
                                <p className='text-color-2'>{t('Page-projects.card-3.description')}</p>
                                <div className='flex flex-row gap-4'>
                                    <button className='text-color-3 border-color-1 border px-4 py-2 uppercase'>
                                        {t('Main.btn-live')} {arrow}
                                    </button>
                                    <button className='text-color-3 border-color-1 border px-4 py-2 uppercase'>
                                        {t('Main.btn-github')} {arrow}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className='text-color-3 text-3xl font-medium mt-8'><span className='text-color-1 text-3xl'>#</span>{t('Page-projects.in-development')}</p>
                    <div className='lg: flex flex-col justify-between gap-10 lg:flex-wrap lg:flex-row'>
                        <div className='border-color-2 border flex flex-col lg:w-[47%] xl:w-[30%]'>
                            <div className='w-full h-40 hidden'>
                                <Image className='lg: w-full lg:h-80' src='/assets/img/sport-see.jpg' alt='Projet sport see' width={333} height={160} />
                            </div>
                            <div className='border-color-2 border flex p-2 border-x-0'>
                                <p className='text-color-2 uppercase pl-2'>{t('Page-projects.card-in-dev-1.language')}</p>
                            </div>
                            <div className='flex flex-col gap-4 p-4'>
                                <p className='uppercase text-color-3 text-2xl font-medium'>{t('Page-projects.card-in-dev-1.title')}</p>
                                <p className='text-color-2'>{t('Page-projects.card-in-dev-1.description')}</p>
                                <div className='flex flex-row gap-4'>
                                    <button className='text-color-3 border-color-1 border px-4 py-2 uppercase'>
                                        {t('Main.btn-live')} {arrow}
                                    </button>
                                    <button className='text-color-3 border-color-1 border px-4 py-2 uppercase'>
                                        {t('Main.btn-github')} {arrow}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className='border-color-2 border flex flex-col lg:w-[47%] xl:w-[30%]'>
                            <div className='w-full h-40 hidden'>
                                <Image className='lg:w-full lg:h-80' src='/assets/img/sport-see.jpg' alt='Projet sport see' width={333} height={160} />
                            </div>
                            <div className='border-color-2 border flex p-2 border-x-0'>
                                <p className='text-color-2 uppercase pl-2'>{t('Page-projects.card-in-dev-2.language')}</p>
                            </div>
                            <div className='flex flex-col gap-4 p-4'>
                                <p className='uppercase text-color-3 text-2xl font-medium'>{t('Page-projects.card-in-dev-2.title')}</p>
                                <p className='text-color-2'>{t('Page-projects.card-in-dev-2.description')}</p>
                                <div className='flex flex-row gap-4'>
                                    <button className='text-color-3 border-color-1 border px-4 py-2 uppercase'>
                                        {t('Main.btn-live')} {arrow}
                                    </button>
                                    <button className='text-color-3 border-color-1 border px-4 py-2 uppercase'>
                                        {t('Main.btn-github')} {arrow}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </section>
    );
};

export default Projects;