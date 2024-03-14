'use client'
import { LanguageContext } from '@/app/layout';
import useTranslation from '@/hooks/useTranslation';
import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import Menu from './menu/Menu';
import Link from 'next/link';

export default function NavBar() {
    const { lang, setLang } = useContext(LanguageContext);
    const { t } = useTranslation(lang);
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [currentPath, setCurrentPath] = useState('');

    useEffect(() => {
        setCurrentPath(window.location.pathname);
    }, []);

    const openMenu = () => {
        setMenuOpen(true);
    }

    const closeMenu = () => {
        setMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <nav
            className={`flex justify-between lg:sticky lg:top-3 
            ${scrolled ? 'bg-backgroundColor-white fixed top-0 left-0 right-0 z-40 w-full p-4 lg:rounded lg:mt-4 ' : ''}`}
        >

            <div className='flex items-center gap-4'>
                {scrolled && (
                    <>
                        <Link className='hover:opacity-50' href='/'>
                            <Image src='/assets/svg/icon-logo-black.svg' alt='logo' width={16} height={16}></Image>
                        </Link>
                        <Link className='hover:opacity-50' href='/'>
                            <span className='text-base font-bold text-color-4 md:text-2xl'>{t('Nav.name')}</span>
                        </Link>
                    </>
                )}
                <Link className='hover:opacity-50' href='/'>
                    <Image src='/assets/svg/logo-default-white.svg' alt='logo' width={16} height={16}></Image>
                </Link>
                <Link className='hover:opacity-50' href='/'>
                    <span className='text-base font-bold text-color-3 md:text-2xl'>{t('Nav.name')}</span>
                </Link>
            </div>
            <div className='flex items-center gap-4'>
                <div className='hidden lg:flex gap-4 lg:gap-6'>
                    {lang === 'fr' && (
                        <button
                            className={`text-base font-bold mr-6 hover:opacity-50 ${scrolled ? 'text-color-4' : 'text-color-3'}`}
                            onClick={() => setLang('en')}
                        >
                            EN
                        </button>
                    )}
                    {lang === 'en' && (
                        <button
                            className={`text-base font-bold mr-6 hover:opacity-50 ${scrolled ? 'text-color-4' : 'text-color-3'}`}
                            onClick={() => setLang('fr')}
                        >
                            FR
                        </button>
                    )}
                    <Link
                        href='/'
                        className={`relative text-base ${scrolled ? 'text-color-4 font-bold' : 'text-color-3 font-bold'} ${currentPath === '/' ? (scrolled ? 'underline-effect-scrolled' : 'underline-effect') : 'hover:opacity-50'}`}
                    >
                        <span
                            className='text-base font-medium text-color-1'
                        >
                            #
                        </span>
                        {t('Nav.home')}
                    </Link>
                    <Link
                        href='/projets'
                        className={`relative text-base ${scrolled ? 'text-color-4 font-bold' : 'text-color-3 font-bold'} ${currentPath === '/projets' ? (scrolled ? 'underline-effect-scrolled' : 'underline-effect') : 'hover:opacity-50'}`}
                    >
                        <span
                            className='text-base font-medium text-color-1'
                        >
                            #
                        </span>
                        {t('Nav.projects')}
                    </Link>
                    <Link
                        href='/a-propos'
                        className={`relative text-base ${scrolled ? 'text-color-4 font-bold' : 'text-color-3 font-bold'} ${currentPath === '/a-propos' ? (scrolled ? 'underline-effect-scrolled' : 'underline-effect') : 'hover:opacity-50'}`}
                    >
                        <span
                            className='text-base font-medium text-color-1'
                        >
                            #
                        </span>
                        {t('Nav.about')}
                    </Link>
                    <Link
                        href='/contact'
                        className={`relative text-base ${scrolled ? 'text-color-4 font-bold' : 'text-color-3 font-bold'} ${currentPath === '/contact' ? (scrolled ? 'underline-effect-scrolled' : 'underline-effect') : 'hover:opacity-50'}`}
                    >
                        <span
                            className='text-base font-medium text-color-1'
                        >
                            #
                        </span>
                        {t('Nav.contact')}
                    </Link>
                </div>
                <Image
                    className='cursor-pointer hover:opacity-50 lg:hidden'
                    src={scrolled ? '/assets/svg/icon-burger-black.svg' : '/assets/svg/icon-menu-burger.svg'}
                    alt='Menu'
                    width={24}
                    height={24}
                    onClick={openMenu}
                />
            </div>
            {isMenuOpen && <Menu closeMenu={closeMenu} />}
        </nav>
    );
};