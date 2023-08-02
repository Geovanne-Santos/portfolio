import Image from 'next/image';
import myPicture from '@/assets/myPicture.jpeg';
import './style.scss';

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
        </div>
      </div>
    </section>
  )

export default About;