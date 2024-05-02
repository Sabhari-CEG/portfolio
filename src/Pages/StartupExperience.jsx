import './Experience.css'
import { Avatar } from 'antd';
import { useInView } from 'react-intersection-observer';
import sa from "../images/sa.png"


const StartupExperience = () => {
    const { ref, inView } = useInView({
        threshold: 0.1, 
        triggerOnce: true 
    });

    const startupExperience = [
        {
            logo : sa,
            name : "SA Creations, India",
            position : "Freelancing Software Developer",
            description : "Founded SA Creations, a consulting startup, fueled by my entrepreneurial curiosity and drive.",
            link : "https://sa-creations.business.site/",
            duration : "Mar 2021 - Jul 2022",
            responsibilities : [
                "Developed a customized billing software for a local florist in our regional language, leveraging JAVA, JDBC, and Swing for a seamless, user-friendly experience.",
                "Partnered with a company to outsource their web development projects.",
                "Partned with another company to co-source a website",
                "Handfull of projects."
            ]
        }
    ]
    return (
        <div ref={ref}>
            <ul className="experience-list">
              {inView && startupExperience.map((experience, index) => (
                  <li key={index} className="experience-item">
                      <Avatar src={experience.logo} size={100} shape="square" className="experience-logo" />
                      <div className="experience-info">
                      <h3 
                        className="Primary" 
                        style={{ fontSize: "2.5vh", marginBottom: "-0.5%", cursor: "pointer" }} 
                        onClick={() => window.open(experience.link, '_blank')}
                    >
                        {experience.name}
                    </h3>
                          <p className="Primary" style={{marginBottom: "-0.5%", fontSize: "2vh"}}>{experience.description}</p>
                          <p className="Primary" style={{marginBottom: "-0.5%", fontSize: "2vh"}}>{experience.position}</p>
                          <p className="Primary" style={{marginBottom: "-0.5%", fontSize: "2vh"}}>{experience.duration}</p>
                          <div>
                            <p className="Primary" style={{fontSize: "2vh"}}>Responsibilities:</p>
                            <ul className="Primary" style={{fontSize: "2vh"}}>
                                {experience.responsibilities.map((responsibilitie, index) => (
                                <li key={index}>{responsibilitie}</li>
                                ))}
                            </ul>
                            </div>

                      </div>
                  </li>
              ))}
          </ul>
        </div>
    );
}

export default StartupExperience;