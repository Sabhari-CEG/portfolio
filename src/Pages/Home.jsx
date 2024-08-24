import React, { useState, useEffect } from 'react';
import './Home.css';
import { Avatar} from 'antd';
import dp from "../images/dp.png";
import AcademicBackground from './AcademicBackground';
import Experience from './Experience';
import useTypingEffect from './TypingEffect';
import Skills from './Skills';
import Contact from './contact';
import Projects from './Projects';

const Home = () => {
    const isMobile = window.innerWidth <= 768;
    const initialSize = isMobile ? 350 : 500;
    const [avatarSize, setAvatarSize] = useState(initialSize);
    const [showTitleBar, setShowTitleBar] = useState(false);
    const [isGlowing, setIsGlowing] = useState(false);
    const [isContentLoaded, setContentLoaded] = useState(false);
    const items = [ 
    "Full Stack Developer",
    "Graduate CS at UIUC",
    "Seeking internship and co-op"
    ];
    const typedIndex = useTypingEffect(items);
    

    useEffect(() => {
        // Assume some data fetch or image loading logic here
        const timer = setTimeout(() => {
            setContentLoaded(true); // Set true when all content is believed to be loaded
        }, 1000); // Adjust timing based on expected load time
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const nameElement = document.querySelector('.Primary'); 
    
        const handleScroll = () => {
            const nameBottom = nameElement.getBoundingClientRect().bottom;
    
            if (nameBottom < 0) {
                setShowTitleBar(true);
            } else {
                setShowTitleBar(false);
            }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    

    useEffect(() => {
        // const avatarElement = document.querySelector('.custom-avatar');
        let scrollTimeout;
        const handleScroll = () => {
            const minSize = isMobile ? 150 : 250;
            const newSize = Math.max(initialSize - window.scrollY, minSize);
            setAvatarSize(newSize);
            setIsGlowing(true);

      // Clear the previous timeout (if any) and set a new one
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => setIsGlowing(false), 200); // 200ms after scrolling stops, remove the glow

      const avatarElement = document.querySelector('.custom-avatar');
      if (newSize <= 200) {
        avatarElement.classList.add('small');
        avatarElement.classList.remove('large');
      } else {
        avatarElement.classList.add('large');
        avatarElement.classList.remove('small');
      }
            // if (newSize <= 200) { // Example threshold for "small"
            //     avatarElement.classList.add('small');
            //     avatarElement.classList.remove('large');
            //   } else { // Considered "large"
            //     avatarElement.classList.add('large');
            //     avatarElement.classList.remove('small');
            //   }
        };

        

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMobile, initialSize]);

    const scrollToComponent = (id) => {
    if (isContentLoaded) {
        setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    }
};

    return (
        <div>
            {showTitleBar && (
            <div className="title-bar">
                <div style={{textAlign: "left", marginLeft: "2%", fontSize: "120%", color: "black"}}>
                Sabhari Parameswaran
                </div>
                <div style={{textAlign: "right"}}>
                <a href="#academic-background" onClick={(e) => {
                e.preventDefault();
                scrollToComponent('academic-background');
                // document.getElementById('academic-background').scrollIntoView({ behavior: 'smooth' });
            }}>
                Academic
            </a>
            <a href="#experience" onClick={(e) => {
                e.preventDefault();
                scrollToComponent('experience');
                // document.getElementById('experience').scrollIntoView({ behavior: 'smooth' });
            }}>
                Experience
            </a>
            <a href="#projects" onClick={(e) => {
                e.preventDefault();
                scrollToComponent('projects');
                console.log(document.getElementById('academic-background').getBoundingClientRect());

                // document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
            }}>
                Projects
            </a>
            
            <a href="#skills" onClick={(e) => {
                e.preventDefault();
                scrollToComponent('skills');
                // document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
            }}>
                Skills
            </a>
            <a href="#contact" onClick={(e) => {
                e.preventDefault();
                scrollToComponent('contact');
                // document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }}>
                Contact
            </a>
                </div>
            </div>
            )}
            <div className="avatar-container">
                {isGlowing ? <Avatar className="custom-avatar" size={avatarSize} src={dp} style={{ backgroundColor: '#a4a6a8', border : "15px groove #fac912" }} />
                : <Avatar className="custom-avatar" size={avatarSize} src={dp} style={{ backgroundColor: '#a4a6a8' }} /> }
                
            </div>
            <h1 className="Primary" style={{ fontSize: "5vh"}}>Sabhari Parameswaran</h1>
            <ul className="Secondary" style={{listStyle: "none"}}>
           
                {items.map((item, index) => (
            <li key={index} className={index <= typedIndex ? "typed-out" : ""} style={{marginBottom: "1vh", color: "#fac912"}}>
                {index === typedIndex ? <span>{item}<span className="cursor">_</span></span> : item}
            </li>
            ))}
                {/* <li style={{marginBottom: "1vh", color: "#5fb964"}}><LaptopOutlined style={{color: "#ffffff"}}/> Full Stack Software Developer</li>
                <li style={{marginBottom: "1vh", color: "#5fb964"}}><ContactsOutlined style={{color: "#ffffff"}}/> Associate Manager - Software Engineering at Galleri5</li>
                <li style={{marginBottom: "1vh", color: "#5fb964"}}><EnvironmentOutlined style={{color: "#ffffff"}}/> Based in Bangalore, Karnataka</li> */}
            </ul>

            <div className="next-component" id="academic-background">
                { <AcademicBackground />}
            </div>

            <div className="next-component" id="experience">
                { <Experience />}
            </div>

            <div className="next-component" id="projects">
                { <Projects />}
            </div>

            <div className="next-component" id='skills'>
                {<Skills />}
            </div>
            
            <div className="next-component" id='contact'>
                {<Contact />}
            </div>
        </div>
    );
};

export default Home;


