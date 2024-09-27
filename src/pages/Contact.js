import React from 'react';
import './contact.css';
import carvid from '../assets/vid.mp4';
import { useNavigate } from 'react-router-dom'; 

export default function Contact() {
    const navigate = useNavigate(); 

    return (
        <div className="main">
            <video src={carvid} autoPlay loop />
            <button 
                className="home-button" 
                onClick={() => navigate('/')} 
            >
                Contact Me!
            </button>
        </div>
    );
}
