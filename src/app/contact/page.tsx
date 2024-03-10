import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import React from 'react';

const page = () => {
    return (
        <>
        <div className='m-4'>
            <NavBar />
            <main className='mt-8'>
                <Contact isContactPage={true}/>
            </main>
        </div>
        <Footer />
    </>
    );
};

export default page;