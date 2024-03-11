'use client'
import React, { useContext } from 'react';
import { LanguageContext } from '@/app/layout';
import useTranslation from '@/hooks/useTranslation';
import Image from 'next/image';

interface SkillsProps {
    isHomePage: boolean
    isAboutPage: boolean
};

const Skills: React.FC<SkillsProps> = ({ isHomePage, isAboutPage }) => {
    const { lang, setLang } = useContext(LanguageContext);
    const { t } = useTranslation(lang);
    return (

        <section className='flex flex-col gap-10 mt-16'>
            <div className='flex items-center'>
                <h2 className='text-color-3 text-3xl'><span className='text-color-1 text-3xl'>#</span>{t('Main.skills.skills')}</h2>
                <div className='h-[1px] w-[200px] bg-backgroundColor-nav ml-6 hidden lg:block'></div>
            </div>
            <div className='flex flex-col gap-4 lg:flex-row lg:items-center 2xl:justify-between'>
            
            <div className='hidden lg:block'>
            <Image src='/assets/img/skills.png' alt='Skills' width={349} height={282} />
            </div>
            <div className='flex flex-col gap-4 lg:flex-row lg:flex-wrap lg:gap-6'>
                <div className='border-color-2 border flex flex-col lg:h-fit-content lg:ml-auto 2xl:mb-[64px]'>
                    <span className='font-semibold text-color-3 p-2'>{t('Main.skills.title-languages')}</span>
                    <div className='border-color-2 border border-x-0 border-b-0'>
                        <p className='text-color-2 p-2'>{t('Main.skills.languages')}</p>
                    </div>
                </div>

                <div className='border-color-2 border flex flex-col lg:h-fit-content lg:ml-auto 2xl:mt-[64px]'>
                    <span className='font-semibold text-color-3 p-2'>{t('Main.skills.title-frameworks')}</span>
                    <div className='border-color-2 border border-x-0 border-b-0 lg:w-52'>
                        <p className='text-color-2 p-2'>{t('Main.skills.frameworks')}</p>
                    </div>
                </div>

                <div className='border-color-2 border flex flex-col lg:h-fit-content lg:w-min-content lg:ml-auto'>
                    <span className='font-semibold text-color-3 p-2'>{t('Main.skills.title-databases')}</span>
                    <div className='border-color-2 border border-x-0 border-b-0'>
                        <p className='text-color-2 p-2'>{t('Main.skills.databases')}</p>
                    </div>
                </div>

                <div className='border-color-2 border flex flex-col lg:h-fit-content lg:w-min-content lg:ml-auto lg:mt-auto 2xl:'>
                    <span className='font-semibold text-color-3 p-2'>{t('Main.skills.title-others')}</span>
                    <div className='border-color-2 border border-x-0 border-b-0 lg:w-52'>
                        <p className='text-color-2 p-2'>{t('Main.skills.others')}</p>
                    </div>
                </div>

                <div className='border-color-2 border flex flex-col lg:w-min-content lg:ml-auto'>
                    <span className='font-semibold text-color-3 p-2'>{t('Main.skills.title-tools')}</span>
                    <div className='border-color-2 border border-x-0 border-b-0'>
                        <p className='text-color-2 p-2'>{t('Main.skills.tools')}</p>
                    </div>
                </div>
            </div>
            </div>
            {!isHomePage && isAboutPage && (
                <>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-color-3 text-3xl'><span className='text-color-1 text-3xl'>#</span>{t('Page-about.soft-skills')}</h2>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='border-color-2 border flex flex-col'>
                            <span className='font-semibold text-color-3 p-2'>{t('Page-about.communication')}</span>
                            <div className='border-color-2 border border-x-0 border-b-0'>
                                <p className='text-color-2 p-2'>{t('Page-about.communication-text')}</p>
                            </div>
                        </div>

                        <div className='border-color-2 border flex flex-col'>
                            <span className='font-semibold text-color-3 p-2'>{t('Page-about.adaptability')}</span>
                            <div className='border-color-2 border border-x-0 border-b-0'>
                                <p className='text-color-2 p-2'>{t('Page-about.adaptability-text')}</p>
                            </div>
                        </div>

                        <div className='border-color-2 border flex flex-col'>
                            <span className='font-semibold text-color-3 p-2'>{t('Page-about.problem-solving')}</span>
                            <div className='border-color-2 border border-x-0 border-b-0'>
                                <p className='text-color-2 p-2'>{t('Page-about.problem-solving-text')}</p>
                            </div>
                        </div>

                        <div className='border-color-2 border flex flex-col'>
                            <span className='font-semibold text-color-3 p-2'>{t('Page-about.time-management')}</span>
                            <div className='border-color-2 border border-x-0 border-b-0'>
                                <p className='text-color-2 p-2'>{t('Page-about.time-management-text')}</p>
                            </div>
                        </div>

                        <div className='border-color-2 border flex flex-col'>
                            <span className='font-semibold text-color-3 p-2'>{t('Page-about.creativity')}</span>
                            <div className='border-color-2 border border-x-0 border-b-0'>
                                <p className='text-color-2 p-2'>{t('Page-about.creativity-text')}</p>
                            </div>
                        </div>

                        <div className='border-color-2 border flex flex-col'>
                            <span className='font-semibold text-color-3 p-2'>{t('Page-about.stress-management')}</span>
                            <div className='border-color-2 border border-x-0 border-b-0'>
                                <p className='text-color-2 p-2'>{t('Page-about.stress-management-text')}</p>
                            </div>
                        </div>

                        <div className='border-color-2 border flex flex-col'>
                            <span className='font-semibold text-color-3 p-2'>{t('Page-about.teamwork')}</span>
                            <div className='border-color-2 border border-x-0 border-b-0'>
                                <p className='text-color-2 p-2'>{t('Page-about.teamwork-text')}</p>
                            </div>
                        </div>

                        <div className='border-color-2 border flex flex-col'>
                            <span className='font-semibold text-color-3 p-2'>{t('Page-about.self-reliance')}</span>
                            <div className='border-color-2 border border-x-0 border-b-0'>
                                <p className='text-color-2 p-2'>{t('Page-about.self-reliance-text')}</p>
                            </div>
                        </div>

                        <div className='border-color-2 border flex flex-col'>
                            <span className='font-semibold text-color-3 p-2'>{t('Page-about.attention-to-detail')}</span>
                            <div className='border-color-2 border border-x-0 border-b-0'>
                                <p className='text-color-2 p-2'>{t('Page-about.attention-to-detail-text')}</p>
                            </div>
                        </div>

                        <div className='border-color-2 border flex flex-col'>
                            <span className='font-semibold text-color-3 p-2'>{t('Page-about.continuous-learning')}</span>
                            <div className='border-color-2 border border-x-0 border-b-0'>
                                <p className='text-color-2 p-2'>{t('Page-about.continuous-learning-text')}</p>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </section>
    );
};

export default Skills;