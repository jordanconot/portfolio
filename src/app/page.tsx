'use client'
import React, { useEffect, useState } from 'react';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero'
import NavBar from '@/components/NavBar';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import SideBar from '@/components/SideBar';
import Loader from '@/components/loader/Loader';

export default function Page() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2200);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <>
            <div className='m-4 md:mr-32 md:ml-32'>
                <NavBar />
                <SideBar />
                <Hero />
                <main className='md:mt-[30vw] lg:mt-[17%] 2xl:mt-[16%]'>
                    <Projects isProjectsPage={false} />
                    <Skills isHomePage={true} isAboutPage={false} />
                    <About isAboutPage={false} />
                    <Contact isContactPage={false} isHomePage={true} />
                </main>
            </div>
            <Footer isContactPage={false} />
        </>
    );
};