'use client'
import { LanguageContext } from '@/app/layout';
import useTranslation from '@/hooks/useTranslation';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Btn from './utils/Btn';

interface ProjectsProps {
    isProjectsPage: boolean
}

const Projects: React.FC<ProjectsProps> = ({ isProjectsPage }) => {
    const { lang, setLang } = useContext(LanguageContext);
    const { t } = useTranslation(lang);
    const [isVideoVisible, setVideoVisible] = useState(false);
    const arrow = `~~>`;

    const [ref1, inView1] = useInView({ threshold: 0.1 });
    const [ref2, inView2] = useInView({ threshold: 0.1 });
    const [ref3, inView3] = useInView({ threshold: 0.1 });
    const [ref4, inView4] = useInView({ threshold: 0.1 });
    const [ref5, inView5] = useInView({ threshold: 0.1 });
    const [ref6, inView6] = useInView({ threshold: 0.1 });
    const [ref7, inView7] = useInView({ threshold: 0 });
    const [ref8, inView8] = useInView({ threshold: 0 });
    const [ref9, inView9] = useInView({ threshold: 0 });
    const [ref10, inView10] = useInView({ threshold: 0 });
    const [ref11, inView11] = useInView({ threshold: 0 });

    const calculateDelay = (index: number) => {
        return `${index * 50}ms`;
    }

    const handlePlayVideo = () => {
        const videoElement = document.getElementById('myVideo') as HTMLVideoElement;
        if (videoElement) {
            videoElement.play();
            setVideoVisible(true);
        }
    };


    return (

        <section className={`flex flex-col gap-10 mt-16 lg:mt-36 `}>
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
                <div ref={ref1} className={`w-full border-color-2 border flex flex-col lg:w-[47%] xl:w-[30%] animate__animated ${inView1 ? 'animate__zoomIn' : 'opacity-0'}`} style={{ animationDelay: calculateDelay(1) }}>
                    <div className='h-60 flex relative'>
                        <Image className='lg:h-60' src='/assets/img/sport-see.jpg' alt='Projet sport see' fill sizes="(max-width: 768px) 100%, (max-width: 1200px) 50%, 33%" />
                    </div>
                    <div className='border-color-2 border flex p-2 border-x-0'>
                        <p className='text-color-2 uppercase pl-2'>{t('Main.card.language')}</p>
                    </div>
                    <div className='flex flex-col gap-4 p-4'>
                        <p className='uppercase text-color-3 text-2xl font-medium'>{t('Main.card.title')}</p>
                        <p className='text-color-2'>{t('Main.card.description')}</p>
                        <div className='flex flex-row gap-4'>
                            <Btn textKey='Main.btn-live' link='https://sport-see-demo-tzv7.vercel.app' showArrow />
                            <Btn textKey='Main.btn-github' link='https://github.com/jordanconot/Sport-see-demo' showArrow />
                        </div>
                    </div>
                </div>

                <div ref={ref2} className={`w-full border-color-2 border flex flex-col lg:w-[47%] xl:w-[30%] animate__animated ${inView2 ? 'animate__zoomIn' : 'opacity-0'}`} style={{ animationDelay: calculateDelay(2) }}>
                    <div className='h-60 flex relative'>
                        <Image className='lg:h-60' src='/assets/img/kasa.png' alt='Projet Kasa' fill sizes="(max-width: 768px) 100%, (max-width: 1200px) 50%, 33%" />
                    </div>
                    <div className='border-color-2 border flex p-2 border-x-0'>
                        <p className='text-color-2 uppercase pl-2'>{t('Main.card.card-2.language')}</p>
                    </div>
                    <div className='flex flex-col gap-4 p-4'>
                        <p className='uppercase text-color-3 text-2xl font-medium'>{t('Main.card.card-2.title')}</p>
                        <p className='text-color-2'>{t('Main.card.card-2.description')}</p>
                        <div className='flex flex-row gap-4'>
                            <Btn textKey='Main.btn-live' link='https://kasa-indol.vercel.app' showArrow />
                            <Btn textKey='Main.btn-github' link='https://github.com/jordanconot/kasa/tree/main' showArrow />
                        </div>
                    </div>
                </div>

                <div ref={ref3} className={`w-full border-color-2 border flex flex-col lg:w-[47%] xl:w-[30%] animate__animated ${inView3 ? 'animate__zoomIn' : 'opacity-0'}`} style={{ animationDelay: calculateDelay(3) }}>
                    <div className='h-60 flex relative'>
                        <Image className='lg:h-60' src='/assets/img/les-petits-plats.jpg' alt='Projet Les petits plats' fill sizes="(max-width: 768px) 100%, (max-width: 1200px) 50%, 33%" />
                    </div>
                    <div className='border-color-2 border flex p-2 border-x-0'>
                        <p className='text-color-2 uppercase pl-2'>{t('Main.card.card-3.language')}</p>
                    </div>
                    <div className='flex flex-col gap-4 p-4'>
                        <p className='uppercase text-color-3 text-2xl font-medium'>{t('Main.card.card-3.title')}</p>
                        <p className='text-color-2'>{t('Main.card.card-3.description')}</p>
                        <div className='flex flex-row gap-4'>
                            <Btn textKey='Main.btn-live' link='https://jordanconot.github.io/Les-petits-plats-demo' showArrow />
                            <Btn textKey='Main.btn-github' link='https://github.com/jordanconot/Les-petits-plats-demo' showArrow />
                        </div>
                    </div>
                </div>

                <div ref={ref4} className={`w-full border-color-2 border flex flex-col lg:w-[47%] xl:w-[30%] animate__animated ${inView4 ? 'animate__zoomIn' : 'opacity-0'}`} style={{ animationDelay: calculateDelay(4) }}>
                    <div className='h-60 flex relative'>
                        <Image className='lg:h-60' src='/assets/img/oh-my-food.jpg' alt='Projet Oh my food' fill sizes="(max-width: 768px) 100%, (max-width: 1200px) 50%, 33%" />
                    </div>
                    <div className='border-color-2 border flex p-2 border-x-0'>
                        <p className='text-color-2 uppercase pl-2'>{t('Main.card.card-4.language')}</p>
                    </div>
                    <div className='flex flex-col gap-4 p-4'>
                        <p className='uppercase text-color-3 text-2xl font-medium'>{t('Main.card.card-4.title')}</p>
                        <p className='text-color-2'>{t('Main.card.card-4.description')}</p>
                        <div className='flex flex-row gap-4'>
                            <Btn textKey='Main.btn-live' link='https://jordanconot.github.io/Conotjordan_P3_01082021' showArrow />
                            <Btn textKey='Main.btn-github' link='https://github.com/jordanconot/Conotjordan_P3_01082021' showArrow />
                        </div>
                    </div>
                </div>

                <div ref={ref5} className={`w-full border-color-2 border flex flex-col lg:w-[47%] xl:w-[30%] animate__animated ${inView5 ? 'animate__zoomIn' : 'opacity-0'}`} style={{ animationDelay: calculateDelay(5) }}>
                    <div className='h-60 flex relative'>
                        <Image className='lg:h-60' src='/assets/img/croissant-demo.png' alt="C'est qui les croissants ?" fill sizes="(max-width: 768px) 100%, (max-width: 1200px) 50%, 33%" />
                    </div>
                    <div className='border-color-2 border flex p-2 border-x-0'>
                        <p className='text-color-2 uppercase pl-2'>{t('Main.card.card-5.language')}</p>
                    </div>
                    <div className='flex flex-col gap-4 p-4'>
                        <p className='uppercase text-color-3 text-2xl font-medium'>{t('Main.card.card-5.title')}</p>
                        <p className='text-color-2'>{t('Main.card.card-5.description')}</p>
                        <div className='flex flex-row gap-4'>
                            <Btn textKey='Main.btn-live' onClick={handlePlayVideo} showArrow />
                            {/* <Btn textKey='Main.btn-github' link='https://github.com/jordanconot/fisheye' showArrow /> */}
                        </div>
                    </div>
                </div>

                <video id="myVideo" controls className={`mt-4 ${isVideoVisible ? 'block' : 'hidden'}`}>
                    <source src='/assets/video/croissant-demo.mp4' type='video/mp4' />
                </video>

                <div ref={ref6} className={`w-full border-color-2 border flex flex-col lg:w-[47%] xl:w-[30%] animate__animated ${inView6 ? 'animate__zoomIn' : 'opacity-0'}`} style={{ animationDelay: calculateDelay(6) }}>
                    <div className='h-60 flex relative'>
                        <Image className='lg:h-60' src='/assets/img/reservia.png' alt='Projet Réservia' fill sizes="(max-width: 768px) 100%, (max-width: 1200px) 50%, 33%" />
                    </div>
                    <div className='border-color-2 border flex p-2 border-x-0'>
                        <p className='text-color-2 uppercase pl-2'>{t('Main.card.card-6.language')}</p>
                    </div>
                    <div className='flex flex-col gap-4 p-4'>
                        <p className='uppercase text-color-3 text-2xl font-medium'>{t('Main.card.card-6.title')}</p>
                        <p className='text-color-2'>{t('Main.card.card-6.description')}</p>
                        <div className='flex flex-row gap-4'>
                            <Btn textKey='Main.btn-live' link='https://jordanconot.github.io/Conotjordan_P2_01072021' showArrow />
                            <Btn textKey='Main.btn-github' link='https://github.com/jordanconot/Conotjordan_P2_01072021' showArrow />
                        </div>
                    </div>
                </div>


            </div>
            {isProjectsPage && (
                <>
                    <p className='text-color-3 text-3xl font-medium mt-8'><span className='text-color-1 text-3xl'>#</span>{t('Page-projects.small-projects')}</p>
                    <div className='lg: flex flex-col justify-between gap-10 lg:flex-wrap lg:flex-row'>
                        <div ref={ref7} className={`w-full border-color-2 border flex flex-col lg:w-[47%] xl:w-[30%] animate__animated ${inView7 ? 'animate__fadeInLeft' : 'opacity-0'}`} style={{ animationDelay: calculateDelay(7) }}>
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
                                    <Btn textKey='Main.btn-live' link='https://jordanconot.github.io/GameOn-website-FR/starterOnly/index.html' showArrow />
                                    <Btn textKey='Main.btn-github' link='https://github.com/jordanconot/GameOn-website-FR' showArrow />
                                </div>
                            </div>
                        </div>

                        <div ref={ref8} className={`w-full border-color-2 border flex flex-col lg:w-[47%] xl:w-[30%] animate__animated ${inView8 ? 'animate__fadeInLeft' : 'opacity-0'}`} style={{ animationDelay: calculateDelay(8) }}>
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
                                    <Btn textKey='Main.btn-live' link='https://github.com/jordanconot/billed-app' showArrow />
                                    <Btn textKey='Main.btn-github' link='https://github.com/jordanconot/billed-app' showArrow />
                                </div>
                            </div>
                        </div>

                        {/* <div ref={ref9} className={`w-full border-color-2 border flex flex-col lg:w-[47%] xl:w-[30%] animate__animated ${inView9 ? 'animate__fadeInLeft' : 'opacity-0'}`} style={{ animationDelay: calculateDelay(9) }}>
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
                                    <Btn textKey='Main.btn-live' link='' showArrow />
                                    <Btn textKey='Main.btn-github' link='' showArrow />
                                </div>
                            </div>
                        </div> */}
                    </div>

                    <p className='text-color-3 text-3xl font-medium mt-8'><span className='text-color-1 text-3xl'>#</span>{t('Page-projects.in-development')}</p>
                    <div className='lg: flex flex-col justify-between gap-10 lg:flex-wrap lg:flex-row'>
                        <div ref={ref10} className={`w-full border-color-2 border flex flex-col lg:w-[47%] xl:w-[30%] animate__animated ${inView10 ? 'animate__fadeIn' : 'opacity-0'}`} style={{ animationDelay: calculateDelay(10) }}>
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
                                    {/* <Btn textKey='Main.btn-live' link='' showArrow />
                                    <Btn textKey='Main.btn-github' link='' showArrow /> */}
                                </div>
                            </div>
                        </div>

                        <div ref={ref11} className={`w-full border-color-2 border flex flex-col lg:w-[47%] xl:w-[30%] animate__animated ${inView11 ? 'animate__fadeIn' : 'opacity-0'}`} style={{ animationDelay: calculateDelay(11) }}>
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
                                    {/* <Btn textKey='Main.btn-live' link='' showArrow />
                                    <Btn textKey='Main.btn-github' link='' showArrow /> */}
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