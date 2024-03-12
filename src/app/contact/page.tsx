import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import React from 'react';

export default function Page()  {
    return (
        <>
        <div className='m-4 md:mr-32 md:ml-32'>
            <NavBar />
            <main className='mt-8'>
                <Contact isContactPage={true} isHomePage={false}/>
            </main>
        </div>
        <Footer isContactPage />
    </>
    );
};