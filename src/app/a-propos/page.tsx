import About from '@/components/About';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import SideBar from '@/components/SideBar';
import Skills from '@/components/Skills';
import React from 'react';

export default function Page()  {
    return (
        <>
        <div className='m-4 md:mr-32 md:ml-32'>
            <NavBar />
            <SideBar />
            <main className='mt-8'>
                <About isAboutPage={true}/>
                <Skills isAboutPage={true} isHomePage={false}/>
            </main>
        </div>
        <Footer isContactPage={false}/>
    </>
    );
};