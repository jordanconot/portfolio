import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero'
import NavBar from '@/components/NavBar';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import React from 'react';

const page = () => {
    return (
        <>
            <div className='m-4'>
                <NavBar />
                <Hero />
                <main className='mt-8'>
                    <Projects />
                    <Skills />
                    <About />
                    <Contact />
                </main>
            </div>
            <Footer />
        </>
    );
};

export default page;