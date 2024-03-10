import About from '@/components/About';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import Skills from '@/components/Skills';
import React from 'react';

const page = () => {
    return (
        <>
        <div className='m-4'>
            <NavBar />
            <main className='mt-8'>
                <About isAboutPage={true}/>
                <Skills isAboutPage={true} isHomePage={false}/>
            </main>
        </div>
        <Footer />
    </>
    );
};

export default page;