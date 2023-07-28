import React from "react";
import useTranslation from 'next-translate/useTranslation';
import TypeIt from "typeit-react";
import '@/app/style/home.modules.scss';

const Home = () => {
  const { t } = useTranslation();

  return (
    <section className="homePage">
      <div>
        <h1 className="greeting"> 
          {t('greeting')} <br />
          <span className="animatedType">  
            <TypeIt
              options={{
                speed: 100,
              }}
            >
              {t('animatedType')}
            </TypeIt>
          </span>
          
        </h1>
      </div>
    </section>
  );
}

export default Home;
