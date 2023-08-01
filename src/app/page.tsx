"use client";
import TypeIt from "typeit-react";
import '@/app/style/home.modules.scss'
import Image from "next/image";
import PresentationImg from "@/assets/presentation_img.png"

const Home = () => (
  <section className="homePage">
    <div className="presentation">
      <div className="greeting">
        <h1> 
          Olá, eu sou Geovanne Meloni <br />e eu sou <br />
          <span className="animatedType">
            <TypeIt>Desenvolvedor Web.</TypeIt>
          </span>
        </h1>
      </div>
      
      <div className="presentationImg">
        <Image 
          src={PresentationImg} 
          alt="Apresentação de portfólio do Dev Geovanne"
        />
      </div>
    </div>
  </section>
)

export default Home;