import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import Projects from '@/components/Projects';
import React from 'react';

const page = () => {
    return (
        <>
        <div className='m-4'>
            <NavBar />
            <main className='mt-8'>
                <Projects />
            </main>
        </div>
        <Footer />
    </>
    );
};

export default page;