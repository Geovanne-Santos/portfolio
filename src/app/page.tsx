"use client";
import TypeIt from "typeit-react";

const Home = () => {
  return (
    <section className="homePage">
      <div>
        <h1 className="greeting"> 
          Olá, eu sou Geovanne Meloni e eu sou <br />
          <TypeIt
            options={{
              strings: ['Desenvolvedor Web'],
              speed: 100,
            }}
          />
          
        </h1>
      </div>
    </section>
  )
}

export default Home;