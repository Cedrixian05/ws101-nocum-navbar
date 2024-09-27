import React from 'react';
import homeImage from '..//Render1.png';
import './home.css'


export default function Home() {
    return (
        <div>
            <section className="home">
                <div className="home-content">
                    <h1>Seamless Car Transactions</h1>
                    <p>Seamless Car Transactions provide a smooth and efficient process for buying and selling vehicles by streamlining paperwork and ensuring clear communication.</p>
                
                    <a href="/" className="btn" onClick={(e) => e.preventDefault()}>
                        What's New?
                    </a>
                </div>
                <div className="home-img">
                        <div className="supercar">
                            <img src={homeImage} alt="Home" />
                        </div>
                        <div className="supercar2"></div>
                    </div>
            </section>
        </div>
    );
}


