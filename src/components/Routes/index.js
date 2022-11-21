import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from '../../pages/About';
import Contact from '../../pages/Contact';
import Home from '../../pages/Home';
import Projets from '../../pages/Projets';
import Skills from '../../pages/Skills';
import Footer from '../Footer';
import Navbar from '../Navbar';

const index = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={< About/>} />
                <Route path='/skills' element={<Skills />} />
                <Route path='/projets' element={<Projets/>} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default index;