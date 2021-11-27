import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import config from '../../config';

const IndexPage = () => (
  <Layout>
    <section id='banner'>
      <div className='inner'>
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <ul className='actions special'>
          <li>
            <Scroll type='id' element='one'>
              <a href='/#' className='button primary'>
                Explore
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
      <Scroll type='id' element='one'>
        <a href='#one' className='more'>
          Learn More
        </a>
      </Scroll>
    </section>

    <section id='one' className='wrapper style1 special'>
      <div className='inner'>
        <header className='major'>
          <h2>
            Arcu aliquet vel lobortis ata nisl
            <br />
            eget augue amet aliquet nisl cep donec
          </h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet
            eleifend
            <br />
            fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus
            ullamcorper.
          </p>
        </header>
        <ul className='icons major'>
          <li>
            <span className='icon style5'>
              <a
                href={'https://www.instagram.com/aga_brudny_music'}
                className='icon brands fa-instagram'
                style={{ 'fontSize': 'xxx-large' }}
              />
            </span>
          </li>
          <li>
            <span className='icon style5'>
              <a
                href={'https://www.facebook.com/AgaBrudnyMusic'}
                className='icon brands fa-facebook'
                style={{ 'fontSize': 'xxx-large' }}
              />
            </span>
          </li>
          <li>
            <span className='icon style5'>
              <a
                href={'https://www.youtube.com/channel/UCgJQk6zbHaVItECPAdGutmg'}
                className='icon brands fa-youtube'
                style={{ 'fontSize': 'xxx-large' }}
              />
            </span>
          </li>
          <li>
            <span className='icon style5'>
              <a
                href={'mailto:aga.brudny@gmail.com'}
                target={'_blank'}
                className='icon fa-envelope'
                style={{ 'fontSize': 'xxx-large' }}
              />
            </span>
          </li>
        </ul>
      </div>
    </section>

    <section id='two' className='wrapper alt style2'>
      <section className='spotlight'>
        <div className='image'>
          <img src={pic1} alt='' />
        </div>
        <div className='content'>
          <h2>
            Music
          </h2>
          <p>
            HearNow: <a href={"https://agabrudny.hearnow.com/"} target={"_blank"} rel={"noreferrer"}>Listen</a>
          </p>
          <p>
            Spotify: <a href={"https://spotify.com/"} target={"_blank"} rel={"noreferrer"}>Listen</a>
          </p>
          <p>
            Klamka: <a href={"https://klamkamusicrecords.com/sklep//"} target={"_blank"} rel={"noreferrer"}>Buy CD</a>
          </p>
        </div>
      </section>
      <section className='spotlight'>
        <div className='image'>
          <img src={pic3} alt='' />
        </div>
        <div className='content'>
          <h2>
            Events
          </h2>
          <p>
            Coming soon...
          </p>
        </div>
      </section>
      <section className='spotlight'>
        <div className='image'>
          <img src={pic2} alt='' />
        </div>
        <div className='content'>
          <h2>
            Gear
          </h2>
          <p>
            Flute: Miyazawa
          </p>
          <p>
            Effects: Boss
          </p>
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
