import React from 'react';

const Projets = () => {
    return (
        <section className='section-projets'>
            <h2 className='title'>Mes réalisations</h2>
            <div className='bloc-img'>
                <div className="element-img" id='img-1'>
                    <a className='link-projet' href='https://jordanconot.github.io/Conotjordan_P2_01072021/' target="_blank" rel="noreferrer">
                        <div className='img-reservia'></div>
                        <div className='text-img'>
                            <div className='flexbetween'>
                                <h3 className='title-projet'>Réservia</h3>
                                <p className='info-projet'>Site vitrine, réservation d'hotel</p>
                            </div>
                        </div>
                    </a>
                </div>

                <div className="element-img" id="img-2">
                    <a className='link-projet' href='https://jordanconot.github.io/Conotjordan_P3_01082021/' target="_blank" rel="noreferrer" >
                        <div className='img-omf'></div>
                        <div className='text-img'>
                            <div className='flexbetween'>
                                <h3 className='title-projet'>Oh my food</h3>
                                <p className='info-projet'>Site vitrine, réservation de plat</p>
                            </div>
                        </div>
                    </a>
                </div>

                <div className="element-img" id='img-3'>
                    <a className='link-projet' href='https://jordanconot.github.io/ConotJordan_P4_01092021/'  target="_blank" rel="noreferrer">
                        <div className='img-lca'></div>
                        <div className='text-img'>
                            <div className='flexbetween'>
                                <h3 className='title-projet'>La chouette agence</h3>
                                <p className='info-projet'>Site vitrine, référencement, bonne patrique</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projets;