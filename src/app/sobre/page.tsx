import Image from 'next/image';
import myPicture from '@/assets/myPicture.jpeg';
import './style.scss';
import { TbBrandGit, TbBrandNextjs, TbBrandSass, TbBrandTailwind, TbBrandTypescript } from 'react-icons/tb';

const About = () => (
    <section className="aboutPage">
      <h1>
        Sobre mim
      </h1>

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
            Meu nome é <strong>Geovanne Meloni</strong>, sou <strong>Desenvolvedor Web</strong> e estudante de <strong>Desenvolvimento de Software Multiplataforma</strong>.
          </p>
          <p>
            a
          </p>
        </div>
      </div>

      <div className='skills'>
        <h2> Minhas ferramentas/Tecnologias </h2>
        <div className='skillsSet'>
          <ul>
            <li><TbBrandNextjs /></li>
            <li><TbBrandTypescript /></li>
            <li><TbBrandSass /></li>
            <li><TbBrandGit /></li>
            <li>Jquery</li>
            <li><TbBrandTailwind /></li>
          </ul>
        </div>
      </div>
    </section>
  )

export default About;