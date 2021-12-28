import React from 'react';
import './styles/Footer.css';
import outlook from './images/outlook.png';
import linkedin from './images/linkedin.png';
import github from './images/github3.png';
import whatsapp from './images/whatsapp.png';
import twitter from './images/twitter.png';
import facebook from './images/facebook.png';
import instagram from './images/instagram.png';

const Footer = (props) => {
  return (
    <footer className='footer'>
      <div className='footer__img'>
        <div className='footer__img-sec1'>
          <a href='mailto:carlospianiforte@gmail.com' target='_blank' rel='noreferrer'><img src={outlook} alt='outlook' /></a>
          <a href='https://www.linkedin.com/in/caom/' target='_blank' rel='noreferrer'><img src={linkedin} alt='linkedin' /></a>
          <a href='https://github.com/carlospianoforte' target='_blank' rel='noreferrer'><img src={github} alt='github' /></a>
          <a href='https://api.whatsapp.com/send?phone=573193623888&text=Hello!%20Carlos,%20Let%27s%20work%20together!' target='_blank' rel='noreferrer'><img src={whatsapp} alt='whatsapp' /></a>
        </div>
        <div className='footer__img-sec2'>
          <a href='https://twitter.com/elperritoo' target='_blank' rel='noreferrer'><img src={twitter} alt='twitter' /></a>
          <a href='https://www.facebook.com/carlos.a.ortiz.948/' target='_blank' rel='noreferrer'><img src={facebook} alt='facebook' /></a>
          <a href='https://www.instagram.com/carlospianoforte/' target='_blank' rel='noreferrer'><img src={instagram} alt='instagram' /></a>
        </div>
      </div>
      <div className='footer__text'>
        <h5>Fabricated by <strong>Carlos Ortíz © 2021.</strong>  Updated Dic, 2021.</h5>
      </div>
    </footer>
  );
};

export default Footer;