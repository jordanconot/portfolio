import Hero from '@/components/Hero'
import NavBar from '@/components/NavBar';
import React from 'react';

const page = () => {
    return (
        <div className='m-4'>
            <NavBar />
            <Hero />
        </div>
    );
};

export default page;