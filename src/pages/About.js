import React from 'react';
import './about.css';  
import lambo from '../lambo.png';  

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="about__container container grid">
        <div className="about__group">
          <img src={lambo} alt="car" className="about__img" />

          <div className="about__card">
            <p className="about__card-description">Hybrid Powertrain: V10 + 3 electric motors <br /> Power: 1,001  

            </p>
          </div>
        </div>

        <div className="about__data">
          <h2 className="section__title about__title">Lamborghini Revuelto</h2>
          <p className="about__description">
          The Lamborghini Revuelto boasts a powerful hybrid engine that delivers exhilarating performance and cutting-edge technology. With its stunning design and advanced aerodynamics, it sets a new standard for luxury supercars.
          </p>

          
          <a href="/" className="button" onClick={(e) => e.preventDefault()}>
          Buy now!
        </a>

        
        
        </div>
      </div>
    </section>
  );
}
