"use client";
import React, { useEffect } from 'react';
import '@/app/style/home.modules.scss';
import Image from 'next/image';
import PresentationImg from '@/assets/presentation_img.png';
import Typed from 'typed.js';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';

const Home = () => {
  useEffect(() => {
    const options = {
      strings: ['Desenvolvedor Web'],
      typeSpeed: 150,
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
            Hello there! 👋
          </h1>
            <p>
              Eu sou Geovanne Meloni e eu sou <br />
              <span className="animatedType"></span>
            </p>
          <Link href={"/sobre"} prefetch={true}>Venha conhecer mais sobre mim! <BsArrowRight /></Link>
        </div>

        <div className="presentationImg">
          <Image src={PresentationImg} alt="Apresentação de portfólio do Dev Geovanne" priority />
        </div>
      </div>
    </section>
  );
};

export default Home;
