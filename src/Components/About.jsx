import React from 'react';
import './About.css';
import mine from '../Media/Team/team-1.jpg'

export default function About() {

  window.addEventListener('load', () => {
    const progressBars = document.querySelectorAll('.progress');
    
    progressBars.forEach((bar) => {
      const width = bar.style.width;
      bar.style.width = '0'; // Set initial width to 0 for animation
      setTimeout(() => {
        bar.style.width = width; // Set the final width to trigger the animation
      }, 400); // Add a delay before starting the animation if needed
    });
  });


  return (
    <section className="about-section">
      <div className="container about-container">
        
        {/* Left Image Section */}
        <div className="about-image">
          <img
            src={mine}
            alt="Working"
          />
        </div>

        {/* Right Bio & Skills Section */}
        <div className="about-content">
          
          {/* Bio Section */}
          <div className="about-bio">
            <h2>My Bio</h2>
            <p>
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind
              texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            </p>
            <p>
              A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a
              paradisematic country, in which roasted parts of sentences fly into your mouth.
            </p>
          </div>

          {/* Skills Section */}
          <div className="about-skills">
            <h2>Skills</h2>
            <div className="skill">
              <span>Design</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: '70%' }}></div>
                <span className="progress-percent">70%</span>
              </div>
            </div>

            <div className="skill">
              <span>HTML5</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: '75%' }}></div>
                <span className="progress-percent">75%</span>
              </div>
            </div>

            <div className="skill">
              <span>CSS3</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: '85%' }}></div>
                <span className="progress-percent">85%</span>
              </div>
            </div>

            <div className="skill">
              <span>WordPress</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: '80%' }}></div>
                <span className="progress-percent">80%</span>
              </div>
            </div>

            <div className="skill">
              <span>Bootstrap</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: '90%' }}></div>
                <span className="progress-percent">90%</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="action-buttons">
              <button className="hire-btn">Hire Me</button>
              <button className="download-cv-btn">Download CV</button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
