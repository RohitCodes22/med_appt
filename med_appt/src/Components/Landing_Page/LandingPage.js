import React from "react";
import "./LandingPage.css";
import Navbar from "../Navbar/Navbar";
const Landing_Page = () => {
<Navbar/>
  return (
    <section className="hero-section">
      <div>
        <div data-aos="fade-up" className="flex-hero">
            
            <h1>
              Your Health<br/>

              <span className="text-gradient">
                
                Our Responsibility
              </span>
            </h1>
            <h4>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque at quae ducimus. Suscipit omnis quibusdam non cum rem voluptatem!
            </h4>
              <button class="button">Get Started</button>
        </div>

      </div>
    </section>
  );
};

export default Landing_Page;