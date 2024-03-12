import React from 'react';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero'
import NavBar from '@/components/NavBar';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import SideBar from '@/components/SideBar';

export default function Page() {

    return (
        <>
            <div className='m-4 md:mr-32 md:ml-32'>
                <NavBar />
                <SideBar />
                <Hero />
                <main className='mt-16'>
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