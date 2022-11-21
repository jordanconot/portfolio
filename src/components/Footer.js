import React from 'react';

const Footer = () => {
    return (
        <footer className='footer-section'>
            <div className='container-footer'>
            <div className='social'>
                    <a href='https://www.linkedin.com/in/jordanconot/' target="_blank" rel='noreferrer'>
                        <i className='fa  fa-linkedin'></i>
                    </a>
                    <a href='https://github.com/jordanconot' target="_blank" rel='noreferrer'>
                        <i className='fa  fa-github'></i>
                    </a>
                    <a href='mailto:jordan10967@gmail.com' target="_blank" rel='noreferrer'>
                        <i className='fa  fa-envelope'></i>
                    </a>
                </div>
                <div className='copyright'>
                    <p>Copyright ©2022, tout droit réserver | ce site web a été fait par CONOT Jordan</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;