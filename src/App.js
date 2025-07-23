import React from "react";
import imagen from './assets/you_and_me.jpg';
import './App.css';

const songsIdSpotify = [
  "6QJCZyJv1fhkCyZA3lRoAD?si=22af5c24e64d4a4d",
  "7sCHy8QQUz3CRvUMp53Cbm?si=f583f34358584798",
  "65vdMBskhx3akkG9vQlSH1?si=34924d13544746f8",
  "2KhrPRV0V1FS2l4eQMJUWt?si=a0cc10e4cb2a4e5a",
  "6aBUnkXuCEQQHAlTokv9or?si=3b01f5d20e424cf1",
  "6jgkEbmQ2F2onEqsEhiliL?si=76f1d44bab0f4948"
];

const showMusicSpotify = (songsIdSpotify) => {
  return (
    <section className="music">
    { 
      songsIdSpotify.map((songId, index) => (
        <div key={index} className="iframe-container">
          <iframe 
            src={`https://open.spotify.com/embed/track/${songId}`}
            width="80%"
            height="80"
            frameBorder="0"
            allow="encrypted-media"
            title={`Cancion ${index + 1}`}
          ></iframe>
        </div>
      ))}
      </section>
  );
}

function MyApp() {
  return (
    <div className="App">
      <header>
        <h1>¡Feliz primeros dos meses juntos mi amoooor!</h1>
      </header>
      
      <section className="message">
        <p>Mi niña hermosa, cada momento contigo es especial, es hermoso,
          gracias por estar en mi vida!
        </p>
        <p>
          Solo quiero decirte que eres lo mejor que me ha pasado, y que estos dos meses han sido muy hermosos,
          que sean así toda la vidaa!
        </p>
      </section>
      
      <section className="gallery">
        <img src={imagen} alt="Nosotros" />
      </section>
      
      <section className="message">
        <p>
          Aquí cito algunas de nuestras canciones mas significantes y profundas para ambos, 
          para recordar el cuánto nos amamamos, aquellos momentos de cada hermosa canción, 
          te amo con toda mi alma mi Nayeli hermosa. 
        </p>
      </section>   
      {showMusicSpotify(songsIdSpotify)}
    </div>
  );
}

export default MyApp;