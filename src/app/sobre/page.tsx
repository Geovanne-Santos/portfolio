import Image from 'next/image';
import myPicture from '@/assets/myPicture.jpeg';
import './style.scss';

const About = () => {
  return (
    <section className="aboutPage">
      <h1>
        Sobre mim
      </h1>

      <div className="about">
        <div className="picture">
          <Image 
            src={myPicture}
            alt='Foto do Geovanne Meloni para seu portfólio'
            
          />
        </div>
      </div>
    </section>
  )
}

export default About;