import React from 'react';
import CV from "../assets/cv-alternance.pdf";


const Home = () => {

    return (
        <main className='main'>
            <div className='row'>
                <div className='content' id='animation-left'>
                    <div className='padding-large' id="main">
                        <header className='container-header' id="home">
                            <h1 className='box-title-header'>
                                <span className='text-wrapper'>
                                    <span className='letters'>
                                      Hey, c'est Jordan 😃
                                    </span>
                                    <span className='line line2'></span>
                                </span>
                            </h1>
                            <div className='typewritter'>
                                <h2 id='typing'>Je suis développeur web</h2>
                            </div>
                            <div className='gif-header'>
                                <div className='gif'></div>
                            </div>
                            <div className='button-send'>
                                <a href='mailto:jordan10967@gmail.com'>
                                    <button  className='btn-2'>
                                        <i className='fa fa-envelope'>
                                            Contactez-moi
                                        </i>
                                    </button>
                                </a>
                                <a href={CV} download="CV CONOT Jordan" >
                                    <button  className='btn-2'>
                                        <i className='fa fa-download'>
                                            Télecharger mon CV
                                        </i>
                                    </button>
                                </a>
                            </div>
                        </header>   
                    </div>
                </div>
                <div className='content' id='animation-right'>
                    <div className="cat">
                        <div className="ear ear--left"></div>
                            <div className="ear ear--right"></div>
                                <div className="face">
                                    <div className="eye eye--left">
                                        <div className="eye-pupil"></div>
                                    </div>
                                <div className="eye eye--right">
                            <div className="eye-pupil"></div>
                        </div>
                        <div className="muzzle"></div>
                    </div>
                </div>
                </div>
            </div>
        </main>
        
    );
};

export default Home;