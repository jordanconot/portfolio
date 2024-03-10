'use client'
import { LanguageContext } from '@/app/layout';
import useTranslation from '@/hooks/useTranslation';
import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import Menu from './menu/Menu';
import Link from 'next/link';


const NavBar = () => {
    const { lang, setLang } = useContext(LanguageContext);
    const { t } = useTranslation(lang);
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState('/');

    const handleLinkClick = (path: string) => {
        setActiveLink(path);
    };

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
            ${scrolled ? 'bg-backgroundColor-white fixed top-0 left-0 right-0 z-50 w-full p-4 lg:rounded lg:mt-4 ' : ''}`}
        >
            <div className='flex items-center gap-4'>
                {scrolled && (
                    <>
                        <Image src='/assets/svg/icon-logo-black.svg' alt='logo' width={16} height={16}></Image>
                        <span className='text-base font-bold text-color-4 md:text-2xl'>{t('Nav.name')}</span>
                    </>
                )}
                <Image src='/assets/svg/logo-default-white.svg' alt='logo' width={16} height={16}></Image>
                <span className='text-base font-bold text-color-3 md:text-2xl'>{t('Nav.name')}</span>
            </div>
            <div className='flex items-center gap-4'>
                <div className='hidden lg:flex gap-4'>
                    <Link
                        href='/'
                        className={`relative text-base ${scrolled  ? 'text-color-4 font-bold' : 'text-color-3'} group underline-effect`}
                    >
                        <span
                            className='text-base font-medium text-color-1'
                        >
                            #
                        </span>
                        Accueil
                    </Link>
                    <Link
                        href='/projets'
                        className={`text-base ${scrolled ? 'text-color-4 font-bold' : 'text-color-3'}`}
                    >
                        <span
                            className='text-base font-medium text-color-1'
                        >
                            #
                        </span>
                        Projets
                    </Link>
                    <Link href='/a-propos' className={`text-base ${scrolled ? 'text-color-4 font-bold' : 'text-color-3'}`}><span className='text-base font-medium text-color-1'>#</span>À propos</Link>
                    <Link href='/contact' className={`text-base ${scrolled ? 'text-color-4 font-bold' : 'text-color-3'}`}><span className='text-base font-medium text-color-1'>#</span>Contact</Link>
                </div>
                {lang === 'fr' && (
                    <button
                        className={`text-base font-bold ${scrolled ? 'text-color-4' : 'text-color-3'}`}
                        onClick={() => setLang('en')}
                    >
                        EN
                    </button>
                )}
                {lang === 'en' && (
                    <button
                        className={`text-base font-bold ${scrolled ? 'text-color-4' : 'text-color-3'}`}
                        onClick={() => setLang('fr')}
                    >
                        FR
                    </button>
                )}
                <Image
                    className='cursor-pointer lg:hidden'
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

export default NavBar;
