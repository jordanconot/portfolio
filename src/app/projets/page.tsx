import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import Projects from '@/components/Projects';
import SideBar from '@/components/SideBar';
import React from 'react';

export default function Page()  {
    return (
        <>
            <div className='m-4 md:mr-32 md:ml-32'>
                <NavBar />
                <SideBar />
                <main className='mt-8'>
                    <Projects isProjectsPage={true} />
                </main>
            </div>
            <Footer isContactPage={false}/>
        </>
    );
};