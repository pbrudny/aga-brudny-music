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
            Aga Brudny- jazz flutist, glissando flutist, composer.
          </h2>
          <p>
            Graduated from the Jazz Departament of Music Conservatory in Katowice Poland. <br />
          </p>
          <p>
            Her first album PLAYGROUND is a playful expression of her colorful music world where contemporary jazz
            blends with fusion, funk, rock, electro, folk and classical motives. <br />
          </p>
          <p>
            Using electric gear as well as Glissando Headjoint by Robert Dick Aga Brudny shows the flute in an unusual
            way: fresh, energetic, full of colour and emotional expression.
          </p>
        </header>
        <ul className='icons major'>
          <li>
            <span className='icon style5'>
              <a
                href={'https://www.instagram.com/aga_brudny_music'}
                className='icon brands fa-instagram'
                target={'_blank'}
                rel={'noreferrer'}
                style={{ 'fontSize': 'xxx-large' }}
              />
            </span>
          </li>
          <li>
            <span className='icon style5'>
              <a
                href={'https://www.facebook.com/AgaBrudnyMusic'}
                className='icon brands fa-facebook'
                target={'_blank'}
                rel={'noreferrer'}
                style={{ 'fontSize': 'xxx-large' }}
              />
            </span>
          </li>
          <li>
            <span className='icon style5'>
              <a
                href={'https://www.youtube.com/channel/UCgJQk6zbHaVItECPAdGutmg'}
                className='icon brands fa-youtube'
                target={'_blank'}
                rel={'noreferrer'}
                style={{ 'fontSize': 'xxx-large' }}
              />
            </span>
          </li>
          <li>
            <span className='icon style5'>
              <a
                href={'mailto:aga.brudny@gmail.com'}
                target={'_blank'}
                rel={'noreferrer'}
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
            HearNow: <a href={'https://agabrudny.hearnow.com/'} target={'_blank'} rel={'noreferrer'}>Listen</a>
          </p>
          <p>
            Spotify: <a href={'https://spotify.com/'} target={'_blank'} rel={'noreferrer'}>Listen</a>
          </p>
          <p>
            Klamka: <a href={'https://klamkamusicrecords.com/sklep//'} target={'_blank'} rel={'noreferrer'}>Buy CD</a>
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
