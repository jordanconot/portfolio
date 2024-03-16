'use client'
import React, { useContext, useState } from 'react';
import { LanguageContext } from '@/app/layout';
import useTranslation from '@/hooks/useTranslation';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

interface SkillsProps {
    isHomePage: boolean
    isAboutPage: boolean
};

const Skills: React.FC<SkillsProps> = ({ isHomePage, isAboutPage }) => {
    const { lang, setLang } = useContext(LanguageContext);
    const { t } = useTranslation(lang);
    const [played1, setPlayed1] = useState(false);
    const [played2, setPlayed2] = useState(false);
    const [played3, setPlayed3] = useState(false);
    const [played4, setPlayed4] = useState(false);
    const [played5, setPlayed5] = useState(false);

    const [ref1, inView1] = useInView({ threshold: 0 });
    const [ref2, inView2] = useInView({ threshold: 0 });
    const [ref3, inView3] = useInView({ threshold: 0 });
    const [ref4, inView4] = useInView({ threshold: 0 });
    const [ref5, inView5] = useInView({ threshold: 0, triggerOnce: true });
    const [ref6, inView6] = useInView({ threshold: 0 });

    const [ref7, inView7] = useInView({ threshold: 0  });
    const [ref8, inView8] = useInView({ threshold: 0 });
    const [ref9, inView9] = useInView({ threshold: 0  });
    const [ref10, inView10] = useInView({ threshold: 0 });
    const [ref11, inView11] = useInView({ threshold: 0  });
    const [ref12, inView12] = useInView({ threshold: 0  });
    const [ref13, inView13] = useInView({ threshold: 0 });
    const [ref14, inView14] = useInView({ threshold: 0  });
    const [ref15, inView15] = useInView({ threshold: 0  });
    const [ref16, inView16] = useInView({ threshold: 0  });

    const calculateDelay = (index: number) => {
        return `${index * 50}ms`;
    }

    return (

        <section className='flex flex-col gap-10 mt-16'>
            <div className='flex items-center'>
                <h2 className='text-color-3 text-3xl font-medium'><span className='text-color-1 text-3xl'>#</span>{t('Main.skills.skills')}</h2>
                <div className='h-[1px] w-[200px] bg-backgroundColor-nav ml-6 hidden lg:block'></div>
            </div>
            <div className='flex flex-col gap-4 lg:flex-row lg:items-center 2xl:justify-between'>

                <div ref={ref1} className={`hidden lg:block animate__animated ${inView1 ? 'animate__zoomIn' : 'opacity-0'}`} style={{ animationDelay: calculateDelay(1) }}>
                    <Image src='/assets/img/skills.png' alt='Skills' width={349} height={282} />
                </div>
                <div className='flex flex-col gap-4 lg:flex-row lg:flex-wrap lg:gap-6'>
                    <div ref={ref2} className={`border-color-2 border flex flex-col lg:h-fit-content lg:ml-auto 2xl:mb-[64px] animate__animated ${inView2 && !played2 ? 'animate__fadeInDown' : 'opacity-0'}`} style={{ animationDelay: calculateDelay(2) }}>
                        <span className='font-semibold text-color-3 p-2'>{t('Main.skills.title-languages')}</span>
                        <div className='border-color-2 border border-x-0 border-b-0'>
                            <p className='text-color-2 p-2'>{t('Main.skills.languages')}</p>
                        </div>
                    </div>

                    <div ref={ref3} className={`border-color-2 border flex flex-col lg:h-fit-content lg:ml-auto 2xl:mt-[64px] animate__animated ${inView3 && !played3 ? 'animate__fadeInUp' : 'opacity-0'}`} style={{ animationDelay: calculateDelay(3) }}>
                        <span className='font-semibold text-color-3 p-2'>{t('Main.skills.title-frameworks')}</span>
                        <div className='border-color-2 border border-x-0 border-b-0 lg:w-52'>
                            <p className='text-color-2 p-2'>{t('Main.skills.frameworks')}</p>
                        </div>
                    </div>

                    <div ref={ref4} className={`border-color-2 border flex flex-col lg:h-fit-content lg:w-min-content lg:ml-auto animate__animated  ${inView4 && !played4 ? 'animate__fadeInDown' : 'opacity-0'}`} style={{ animationDelay: calculateDelay(4) }}>
                        <span className='font-semibold text-color-3 p-2'>{t('Main.skills.title-databases')}</span>
                        <div className='border-color-2 border border-x-0 border-b-0'>
                            <p className='text-color-2 p-2'>{t('Main.skills.databases')}</p>
                        </div>
                    </div>

                    <div ref={ref5} className={`border-color-2 border flex flex-col lg:h-fit-content lg:w-min-content lg:ml-auto lg:mt-auto animate__animated  ${inView5 && !played5 ? 'animate__fadeInUp' : 'opactiy:0'}`} style={{ animationDelay: calculateDelay(5) }}>
                        <span className='font-semibold text-color-3 p-2'>{t('Main.skills.title-others')}</span>
                        <div className='border-color-2 border border-x-0 border-b-0 lg:w-52'>
                            <p className='text-color-2 p-2'>{t('Main.skills.others')}</p>
                        </div>
                    </div>

                    <div ref={ref6} className={`border-color-2 border flex flex-col lg:w-min-content lg:ml-auto animate__animated  ${inView6 ? 'animate__fadeInDown' : 'opacity:0'}`} style={{ animationDelay: calculateDelay(6) }}>
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
                    <div className='flex flex-col gap-4 lg:flex-wrap lg:flex-row lg:justify-between animate__animated'>
                        <div ref={ref7} className={`border-color-2 border flex flex-col lg:w-[48%] animate__animated ${inView7 ? 'animate__fadeInLeft' : 'opacity-0'} `} style={{ animationDelay: calculateDelay(7) }}>
                            <span className='font-semibold text-color-3 p-2'>{t('Page-about.communication')}</span>
                            <div className='border-color-2 border border-x-0 border-b-0'>
                                <p className='text-color-2 p-2'>{t('Page-about.communication-text')}</p>
                            </div>
                        </div>

                        <div ref={ref8} className={`border-color-2 border flex flex-col lg:w-[49%] animate__animated ${inView8 ? 'animate__fadeInRight' : 'opacity-0'} `} style={{ animationDelay: calculateDelay(8) }}>
                            <span className='font-semibold text-color-3 p-2'>{t('Page-about.adaptability')}</span>
                            <div className='border-color-2 border border-x-0 border-b-0'>
                                <p className='text-color-2 p-2'>{t('Page-about.adaptability-text')}</p>
                            </div>
                        </div>

                        <div ref={ref9} className={`border-color-2 border flex flex-col lg:w-[48%] animate__animated ${inView9 ? 'animate__fadeInLeft' : 'opacity-0'} `} style={{ animationDelay: calculateDelay(7) }}>
                            <span className='font-semibold text-color-3 p-2'>{t('Page-about.problem-solving')}</span>
                            <div className='border-color-2 border border-x-0 border-b-0'>
                                <p className='text-color-2 p-2'>{t('Page-about.problem-solving-text')}</p>
                            </div>
                        </div>

                        <div ref={ref10} className={`border-color-2 border flex flex-col lg:w-[49%] animate__animated ${inView10 ? 'animate__fadeInRight' : 'opacity-0'} `} style={{ animationDelay: calculateDelay(8) }}>
                            <span className='font-semibold text-color-3 p-2'>{t('Page-about.time-management')}</span>
                            <div className='border-color-2 border border-x-0 border-b-0'>
                                <p className='text-color-2 p-2'>{t('Page-about.time-management-text')}</p>
                            </div>
                        </div>

                        <div ref={ref11} className={`border-color-2 border flex flex-col lg:w-[48%] animate__animated ${inView11 ? 'animate__fadeInLeft' : 'opacity-0'} `} style={{ animationDelay: calculateDelay(7) }}>
                            <span className='font-semibold text-color-3 p-2'>{t('Page-about.creativity')}</span>
                            <div className='border-color-2 border border-x-0 border-b-0'>
                                <p className='text-color-2 p-2'>{t('Page-about.creativity-text')}</p>
                            </div>
                        </div>

                        <div ref={ref12} className={`border-color-2 border flex flex-col lg:w-[49%] animate__animated ${inView12 ? 'animate__fadeInRight' : 'opacity-0'} `} style={{ animationDelay: calculateDelay(8) }}>
                            <span className='font-semibold text-color-3 p-2'>{t('Page-about.stress-management')}</span>
                            <div className='border-color-2 border border-x-0 border-b-0'>
                                <p className='text-color-2 p-2'>{t('Page-about.stress-management-text')}</p>
                            </div>
                        </div>

                        <div ref={ref13} className={`border-color-2 border flex flex-col lg:w-[48%] animate__animated ${inView13 ? 'animate__fadeInLeft' : 'opacity-0'} `} style={{ animationDelay: calculateDelay(7) }}>
                            <span className='font-semibold text-color-3 p-2'>{t('Page-about.teamwork')}</span>
                            <div className='border-color-2 border border-x-0 border-b-0'>
                                <p className='text-color-2 p-2'>{t('Page-about.teamwork-text')}</p>
                            </div>
                        </div>

                        <div ref={ref14} className={`border-color-2 border flex flex-col lg:w-[49%] animate__animated ${inView14 ? 'animate__fadeInRight' : 'opacity-0'} `} style={{ animationDelay: calculateDelay(8) }}>
                            <span className='font-semibold text-color-3 p-2'>{t('Page-about.self-reliance')}</span>
                            <div className='border-color-2 border border-x-0 border-b-0'>
                                <p className='text-color-2 p-2'>{t('Page-about.self-reliance-text')}</p>
                            </div>
                        </div>

                        <div ref={ref15} className={`border-color-2 border flex flex-col lg:w-[48%] animate__animated ${inView15 ? 'animate__fadeInLeft' : 'opacity-0'} `} style={{ animationDelay: calculateDelay(7) }}>
                            <span className='font-semibold text-color-3 p-2'>{t('Page-about.attention-to-detail')}</span>
                            <div className='border-color-2 border border-x-0 border-b-0'>
                                <p className='text-color-2 p-2'>{t('Page-about.attention-to-detail-text')}</p>
                            </div>
                        </div>

                        <div ref={ref16} className={`border-color-2 border flex flex-col lg:w-[49%] animate__animated ${inView16 ? 'animate__fadeInRight' : 'opacity-0'} `} style={{ animationDelay: calculateDelay(8) }}>
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