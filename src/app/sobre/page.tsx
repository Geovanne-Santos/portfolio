import Image from 'next/image';
import myPicture from '@/assets/myPicture.jpeg';
import './style.scss';
import { SiNextdotjs, SiTypescript, SiSass, SiGit, SiTailwindcss, SiJquery } from 'react-icons/si';
import DownloadButton from '@/components/DownloadButton';

const About = () => (
    <section className="aboutPage">
      <h1>Sobre mim</h1>

      <div className="about">
        <div className="picture">
          <Image 
            src={myPicture}
            alt='Foto do Geovanne Meloni para seu portfólio'
            priority
          />
        </div>

        <div className='aboutMe'>
          <p>
            Meu nome é Geovanne Meloni, sou <strong>Desenvolvedor Web</strong> e estudante de <strong>Desenvolvimento de Software Multiplataforma</strong>.
          </p>
          <p>
            Atualmente, atuo como <strong>FullStack</strong>, acumulando um sólido conhecimento técnico em desenvolvimento ágil e implementando melhores práticas para otimização de <strong>SEO</strong>, <strong>desempenho</strong> e <strong>performance</strong>.
          </p>
          <DownloadButton file={'/geovanne-meloni-cv.pdf'}> Download CV </DownloadButton>
        </div>
      </div>

      <div className='skills'>
        <h2> Minhas Ferramentas/Tecnologias </h2>
        <div className='skillsSet'>
          <ul>
            <li><SiNextdotjs /> Next.js</li>
            <li><SiTypescript /> TypeScript</li>
            <li><SiSass />Sass</li>
            <li><SiGit />Git</li>
            <li><SiJquery />Jquery</li>
            <li><SiTailwindcss />TailwindCSS</li>
          </ul>
        </div>
      </div>
    </section>
  )

export default About;