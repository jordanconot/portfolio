import React from 'react';

const Contact = () => {
    return (
        <section className='section-contact'>
            <div className='contact-container'>
                <div className='form-container'>
                    <h3 className='title'>Contactez-moi</h3>
                    <form action='' className='contact-form'>
                        <input type="text" placeholder="Votre nom" required></input>
                        <input type="email" name="" id="" placeholder="Entrer votre email..." required></input>
                        <textarea name="" id="" placeholder="Ecrivez moi" required></textarea>
                        <input type="submit" value="Envoyer" className="send-button" mailto="jordan10967@gmail.com"></input>
                    </form>
                </div>
                <div className='map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23127.18810678182!2d3.8815116328722494!3d43.566997759260154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b6b003830534e9%3A0x4078821166ac700!2s34970%20Lattes!5e0!3m2!1sfr!2sfr!4v1669029840572!5m2!1sfr!2sfr" 
                 allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </section>
    );
};

export default Contact;