import React, { useRef, useState } from 'react';
import './iraqculturelocal.css';
import video12 from './iraqiculure.mp4';
import clothes1 from './7eee72ade500200dcfcfba07c8974b3c.jpg'
import clothes2 from './f295dc3cc6ed44e3a92df06a83ab83e2.jpg'
import clothes3 from './clothes.1.jpg'
import clothes4 from './clothes.2.jpg'
import clothes5 from './clothes.3.jpg'

const Iraqculturelocal = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const clothes = [
    {
      src:clothes1,
      caption: "Shop from a wide range of local designer trends"
    },
    {
      src:clothes2,
      caption: "Shop from a wide range of local designer trends"
    },
    {
      src:clothes3,
      caption: "Shop from a wide range of local designer trends"
    },
    {
      src:clothes4,
      caption: "Shop from a wide range of local designer trends"
    },
    {
      src:clothes5,
      caption: "Shop from a wide range of local designer trends"
    },
  
  ];

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % clothes.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + clothes.length) % clothes.length);
  };

  return (
    <div className="video-containerculture">
      <h1 className="hero-titleculture">Local culture & heritage</h1>
      <video ref={videoRef} autoPlay loop muted className="hero-videoculture">
        <source src={video12} type="video/mp4" />
      </video>
      <span className="accessibility-hidden-text">Play video</span>
      <div className="my-icon-white video-control-box" onClick={handlePlayPause}>
        <svg
          className="s1t5290"
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="14"
          viewBox="0 0 13.714 16"
        >
          <path
            d="M35.23,28.2l-11.294-7a1.363,1.363,0,0,0-.721-.2A1.124,1.124,0,0,0,22,22V36a1.124,1.124,0,0,0,1.215,1,1.361,1.361,0,0,0,.721-.2l11.294-7A.9.9,0,0,0,35.23,28.2Z"
            transform="translate(-22 -21)"
          />
        </svg>
      </div>
      <div>
        <p className='Discoverwaem'>Discover the warm Iraqi hospitality, rich culinary heritage, and proud traditions that make up Iraq's vibrant culture.</p>
      </div>

      {/* Scroll Link Section */}
      <h4 className='jump'>Jump to section</h4>
      <ul className="droplist">
        <li className="droplist__li">
          <a className="droplist__a" href="#Typical-Iraqi-clothing" aria-label="Typical Iraqi clothing">
          <svg width="12" height="12" className="icon">
              <g transform="rotate(-45 6.12,5.97)">
                <path d="m5.61,13.69a-0.71,-0.71 0 0 0 1.09,-0.22l5.66,-5.66a-0.71,-0.71 0 0 0 -1.41,-1.41l-3.96,3.96l0.004,-11.38a-0.71,-0.71 0 0 0 -2.00,0l0.004,11.38l-3.95,-3.95a-0.71,-0.71 0 0 0 -1.41,1.41l5.66,5.66a-0.71,-0.71 0 0 0 0.32,0.22z" fill="currentColor"></path>
              </g>
            </svg>
            Typical Iraqi clothing
          </a>
        </li>
        <li className="droplist__li">
          <a className="droplist__a" href="#Typical-Iraqi-food" aria-label="Typical Iraqi food">
            <svg width="12" height="12" className="icon">
              <g transform="rotate(-45 6.12,5.97)">
                <path d="m5.61,13.69a-0.71,-0.71 0 0 0 1.09,-0.22l5.66,-5.66a-0.71,-0.71 0 0 0 -1.41,-1.41l-3.96,3.96l0.004,-11.38a-0.71,-0.71 0 0 0 -2.00,0l0.004,11.38l-3.95,-3.95a-0.71,-0.71 0 0 0 -1.41,1.41l5.66,5.66a-0.71,-0.71 0 0 0 0.32,0.22z" fill="currentColor"></path>
              </g>
            </svg>
            Typical Iraqi food
          </a>
        </li>
        <li className="droplist__li">
          <a className="droplist__a" href="#Hospitality-and-etiquette" aria-label="Hospitality and etiquette">
            <svg width="12" height="12" className="icon">
              <g transform="rotate(-45 6.12,5.97)">
                <path d="m5.61,13.69a-0.71,-0.71 0 0 0 1.09,-0.22l5.66,-5.66a-0.71,-0.71 0 0 0 -1.41,-1.41l-3.96,3.96l0.004,-11.38a-0.71,-0.71 0 0 0 -2.00,0l0.004,11.38l-3.95,-3.95a-0.71,-0.71 0 0 0 -1.41,1.41l5.66,5.66a-0.71,-0.71 0 0 0 0.32,0.22z" fill="currentColor"></path>
              </g>
            </svg>
            Hospitality and etiquette
          </a>
        </li>
        <li className="droplist__li">
          <a className="droplist__a" href="#Arabic-arts-and-handicrafts" aria-label="Arabic arts and traditional handicrafts">
            <svg width="12" height="12" className="icon">
              <g transform="rotate(-45 6.12,5.97)">
                <path d="m5.61,13.69a-0.71,-0.71 0 0 0 1.09,-0.22l5.66,-5.66a-0.71,-0.71 0 0 0 -1.41,-1.41l-3.96,3.96l0.004,-11.38a-0.71,-0.71 0 0 0 -2.00,0l0.004,11.38l-3.95,-3.95a-0.71,-0.71 0 0 0 -1.41,1.41l5.66,5.66a-0.71,-0.71 0 0 0 0.32,0.22z" fill="currentColor"></path>
              </g>
            </svg>
            Iraqi arts and traditional handicrafts
          </a>
        </li>
        <li className="droplist__li">
          <a className=" droplist__a" href="#Iraqi-music" aria-label="Iraqi music, celebrations and festivities">
            <svg width="12" height="12" className="icon">
              <g transform="rotate(-45 6.12,5.97)">
                <path d="m5.61,13.69a-0.71,-0.71 0 0 0 1.09,-0.22l5.66,-5.66a-0.71,-0.71 0 0 0 -1.41,-1.41l-3.96,3.96l0.004,-11.38a-0.71,-0.71 0 0 0 -2.00,0l0.004,11.38l-3.95,-3.95a-0.71,-0.71 0 0 0 -1.41,1.41l5.66,5.66a-0.71,-0.71 0 0 0 0.32,0.22z" fill="currentColor"></path>
              </g>
            </svg>
            Iraqi music, celebrations and festivities
          </a>
        </li>
        <li className="droplist__li">
          <a className="droplist__a" href="#National-holidays" aria-label="National holidays in Iraq">
            <svg width="12" height="12" className="icon">
              <g transform="rotate(-45 6.12,5.97)">
                <path d="m5.61,13.69a-0.71,-0.71 0 0 0 1.09,-0.22l5.66,-5.66a-0.71,-0.71 0 0 0 -1.41,-1.41l-3.96,3.96l0.004,-11.38a-0.71,-0.71 0 0 0 -2.00,0l0.004,11.38l-3.95,-3.95a-0.71,-0.71 0 0 0 -1.41,1.41l5.66,5.66a-0.71,-0.71 0 0 0 0.32,0.22z" fill="currentColor"></path>
              </g>
            </svg>
            National holidays in Iraq
          </a>
        </li>
      </ul>

      {/* Typical Iraqi clothing Section */}
      <section className="TypicalIraqiClothing" id="Typical-Iraqi-clothing">
        <h2 className='clothiraq'>Typical Iraqi Clothing</h2>
        <p className='abaya'>Typical Iraqi clothing reflects the rich cultural heritage and diversity of the country. The abaya is a traditional garment worn by women, often made of lightweight fabric, providing both modesty and comfort. It is usually black, but can also be found in various colors and designs, especially for special occasions.</p>

<p className='abaya'>
  Men often wear the shmagh or keffiyeh, a headscarf that protects against the sun and dust. This iconic piece is typically white with black or red patterns.
</p>
<p className='abaya'>
  In the Kurdish regions, the kurta and shalwa are popular, representing the vibrant Kurdish culture with colorful embroidery and unique patterns.
</p>
<p className='abaya'>
  In Anbar province, traditional attire often includes loose-fitting clothing suitable for the desert climate, emphasizing practicality and comfort. Each of these garments not only serves a functional purpose but also symbolizes the identity and traditions of the Iraqi people.
</p>
        <div className="carousel-container">
          <div className="carousel-slide">
            <img src={clothes[currentIndex].src} alt={`Slide ${currentIndex + 1}`} />
            <div className="carousel-caption">
              <p>{clothes[currentIndex].caption}</p>
            </div>
          </div>
          <div className="carousel-controls">
            <button onClick={prevSlide} className="carousel-button carousel-button-left">Previous</button>
            <button onClick={nextSlide} className="carousel-button carousel-button-right">Next</button>
          </div>
          <div className="carousel-dots">
            {clothes.map((_, index) => (
              <div key={index} className={`dot ${index === currentIndex ? 'active' : ''}`} onClick={() => setCurrentIndex(index)}></div>
            ))}
          </div>
        </div>
      </section>


      {/*   Typical Iraqi food Section */}



      <section className="TypicalIraqiClothing" id="Typical-Iraqi-food">
        <h2 className='clothiraq'>Typical Iraqi food</h2>

<p className='abaya'>
Typical Iraqi food is a delightful reflection of the country’s rich history and diverse culture. One of the most famous dishes is <strong>biriyani</strong>, a fragrant rice dish often cooked with lamb or chicken, seasoned with spices like cardamom and saffron. Another staple is <strong>kebab</strong>, made from marinated meat, grilled to perfection, and often served with fresh bread and salads.</p>
<p className='abaya'>
<strong>Dolma</strong>, vegetables stuffed with rice and meat, showcases the culinary influence of neighboring regions. <strong>Masgouf</strong>, grilled fish, is a beloved dish, especially along the rivers.</p>
<p className='abaya'>
Iraqi cuisine also features a variety of bread, such as <strong>samoon</strong>, which is commonly enjoyed with meals. Sweets like<strong> baklava</strong> and <strong>knafeh</strong> provide a sweet ending to meals, highlighting the country’s love for rich flavors. Overall, Iraqi food is characterized by its use of fresh ingredients and bold spices, offering a delicious experience for anyone who tries it.</p>
        <div className="carousel-container">
          <div className="carousel-slide">
            <img src={clothes[currentIndex].src} alt={`Slide ${currentIndex + 1}`} />
            <div className="carousel-caption">
              <p>{clothes[currentIndex].caption}</p>
            </div>
          </div>
          <div className="carousel-controls">
            <button onClick={prevSlide} className="carousel-button carousel-button-left">Previous</button>
            <button onClick={nextSlide} className="carousel-button carousel-button-right">Next</button>
          </div>
          <div className="carousel-dots">
            {clothes.map((_, index) => (
              <div key={index} className={`dot ${index === currentIndex ? 'active' : ''}`} onClick={() => setCurrentIndex(index)}></div>
            ))}
          </div>
        </div>
      </section>



      {/* Hospitality and etiquette Section */}



    <section className="TypicalIraqiClothing" id="Hospitality-and-etiquette">
        <h2 className='clothiraq'>Hospitality and etiquette</h2>

<p className='abaya'>
Hospitality is a cornerstone of Iraqi culture, deeply rooted in tradition and social values. When visiting an Iraqi home, guests are often warmly welcomed with open arms and offered refreshments, typically tea or coffee, along with sweets. It is customary for hosts to go above and beyond to ensure their guests feel comfortable and valued.</p>
<p className='abaya'>
Etiquette during meals is also significant; it is polite to wait for the host to begin eating before starting your meal. Often, meals are served family-style, encouraging sharing and communal enjoyment.</p>
<p className='abaya'>
Showing respect for elders is crucial, and greetings should be warm and sincere. Physical gestures, such as a handshake or a slight bow of the head, are common. Overall, Iraqi hospitality reflects a profound sense of community and generosity, making gatherings a joyful experience filled with warmth and connection.</p>
        <div className="carousel-container">
          <div className="carousel-slide">
            <img src={clothes[currentIndex].src} alt={`Slide ${currentIndex + 1}`} />
            <div className="carousel-caption">
              <p>{clothes[currentIndex].caption}</p>
            </div>
          </div>
          <div className="carousel-controls">
            <button onClick={prevSlide} className="carousel-button carousel-button-left">Previous</button>
            <button onClick={nextSlide} className="carousel-button carousel-button-right">Next</button>
          </div>
          <div className="carousel-dots">
            {clothes.map((_, index) => (
              <div key={index} className={`dot ${index === currentIndex ? 'active' : ''}`} onClick={() => setCurrentIndex(index)}></div>
            ))}
          </div>
        </div>
      </section>



      {/*  Iraqi arts and traditional handicrafts section */}



      <section className="TypicalIraqiClothing" id="Arabic-arts-and-handicrafts">
        <h2 className='clothiraq'>Iraqi arts and traditional handicrafts</h2>

<p className='abaya'>
Iraqi arts and traditional handicrafts are a vibrant expression of the country’s rich cultural heritage. One of the most renowned forms of art is <strong>calligraphy</strong>, which beautifully reflects the Arabic script and is often used in religious and decorative contexts.</p>
<p className='abaya'>
<strong>Tile work</strong> is another significant craft, especially in historical sites, showcasing intricate geometric patterns and vibrant colors that adorn mosques and palaces.<strong> Weaving</strong> is also prominent, with artisans creating stunning rugs and textiles that feature traditional designs and motifs.</p>
<p className='abaya'>
Pottery and ceramics are highly valued, with unique styles that have been passed down through generations. Additionally,<strong> jewelry making</strong> in Iraq often incorporates intricate designs and local materials, reflecting cultural identity and history. Overall, these art forms and handicrafts not only highlight Iraq's artistic talent but also preserve its rich traditions and stories.</p>
        <div className="carousel-container">
          <div className="carousel-slide">
            <img src={clothes[currentIndex].src} alt={`Slide ${currentIndex + 1}`} />
            <div className="carousel-caption">
              <p>{clothes[currentIndex].caption}</p>
            </div>
          </div>
          <div className="carousel-controls">
            <button onClick={prevSlide} className="carousel-button carousel-button-left">Previous</button>
            <button onClick={nextSlide} className="carousel-button carousel-button-right">Next</button>
          </div>
          <div className="carousel-dots">
            {clothes.map((_, index) => (
              <div key={index} className={`dot ${index === currentIndex ? 'active' : ''}`} onClick={() => setCurrentIndex(index)}></div>
            ))}
          </div>
        </div>
      </section>


      {/* Iraqi music, celebrations and festivities Section */}



      <section className="TypicalIraqiClothing" id="Iraqi-music">
        <h2 className='clothiraq'>Iraqi music, celebrations and festivities</h2>

<p className='abaya'>
Iraq has a rich musical heritage that reflects its diverse cultures and traditions. Traditional Iraqi music features instruments like the <strong>oud</strong> and <strong>darbuka</strong>, often accompanied by poetic lyrics that tell stories of love, loss, and history. Celebrations in Iraq are vibrant and filled with music, especially during festivals such as<strong> Nowruz</strong>, the Persian New Year, where people gather to dance and sing.</p>
<p className='abaya'>
Religious holidays like <strong>Eid al-Fitr</strong> and <strong>Eid al-Adha</strong> are also marked by communal festivities, including feasting, music, and traditional dances. <strong>The Mawlid</strong>, celebrating the birth of the Prophet Muhammad, features religious songs and gatherings.</p>
<p className='abaya'>
These events foster a sense of community and cultural identity, allowing Iraqis to express their joy and resilience through music and celebration. Overall, music plays a vital role in bringing people together during both joyous occasions and solemn remembrances.
</p>
        <div className="carousel-container">
          <div className="carousel-slide">
            <img src={clothes[currentIndex].src} alt={`Slide ${currentIndex + 1}`} />
            <div className="carousel-caption">
              <p>{clothes[currentIndex].caption}</p>
            </div>
          </div>
          <div className="carousel-controls">
            <button onClick={prevSlide} className="carousel-button carousel-button-left">Previous</button>
            <button onClick={nextSlide} className="carousel-button carousel-button-right">Next</button>
          </div>
          <div className="carousel-dots">
            {clothes.map((_, index) => (
              <div key={index} className={`dot ${index === currentIndex ? 'active' : ''}`} onClick={() => setCurrentIndex(index)}></div>
            ))}
          </div>
        </div>
      </section>


      {/*  National holidays in Iraq Section */}



      <section className="TypicalIraqiClothing" id="National-holidays">
        <h2 className='clothiraq'>National holidays in Iraq </h2>

<p className='abaya'>
Iraq will celebrate several significant national holidays that showcase its rich cultural heritage. Independence Day, observed on October 3rd, commemorates Iraq’s freedom from British rule in 1932, serving as a reminder of national sovereignty. Republic Day, celebrated on July 14th, marks the 1958 revolution that led to the establishment of the republic.
</p>
<p className='abaya'>
Nowruz, the Persian New Year, will be celebrated on March 21st, especially in the Kurdish regions, symbolizing renewal and the arrival of spring. Religious holidays also play a crucial role, with Eid al-Fitr marking the end of Ramadan and Eid al-Adha celebrating sacrifice. These holidays promote unity and cultural pride, allowing Iraqis to connect with their traditions and strengthen community bonds throughout the country.</p>

        <div className="carousel-container">
          <div className="carousel-slide">
            <img src={clothes[currentIndex].src} alt={`Slide ${currentIndex + 1}`} />
            <div className="carousel-caption">
              <p>{clothes[currentIndex].caption}</p>
            </div>
          </div>
          <div className="carousel-controls">
            <button onClick={prevSlide} className="carousel-button carousel-button-left">Previous</button>
            <button onClick={nextSlide} className="carousel-button carousel-button-right">Next</button>
          </div>
          <div className="carousel-dots">
            {clothes.map((_, index) => (
              <div key={index} className={`dot ${index === currentIndex ? 'active' : ''}`} onClick={() => setCurrentIndex(index)}></div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Iraqculturelocal;