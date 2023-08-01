"use client";
import React, { useEffect } from 'react';
import '@/app/style/home.modules.scss';
import Image from 'next/image';
import PresentationImg from '@/assets/presentation_img.png';
import Typed from 'typed.js';

const Home = () => {
  useEffect(() => {
    const options = {
      strings: ['Desenvolvedor Web'],
      typeSpeed: 40,
    };

    const animatedType = new Typed('.animatedType', options);
    return () => {
      animatedType.destroy();
    };
  }, []);

  return (
    <section className="homePage">
      <div className="presentation">
        <div className="greeting">
          <h1>
            Hello there! 👋<br /> Eu sou Geovanne Meloni <br />e eu sou <br />
            <span className="animatedType"></span>
          </h1>
        </div>

        <div className="presentationImg">
          <Image src={PresentationImg} alt="Apresentação de portfólio do Dev Geovanne" priority />
        </div>
      </div>
    </section>
  );
};

export default Home;
