"use client";
import TypeIt from "typeit-react";

const Home = () => {
  return (
    <section className="homePage">
      <div>
        <h1> 
          Olá, eu sou Geovanne Meloni e eu sou <br />
          <TypeIt
            options={{
              strings: ['Desenvolvedor Web'],
              speed: 50,
            }}
          />
          
        </h1>
      </div>
    </section>
  )
}

export default Home;