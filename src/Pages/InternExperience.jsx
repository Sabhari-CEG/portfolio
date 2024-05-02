import './Experience.css'
import decntmass from "../images/dcentmass.jpeg"
import { Avatar } from 'antd';
import { useInView } from 'react-intersection-observer';

const InternExperience = () => {
    const { ref, inView } = useInView({
        threshold: 0.1, 
        triggerOnce: true 
    });

    const interExperience = [
        {
            logo : decntmass,
            name : "DCENTMASS, Bangalore, Karnataka, India",
            position : "Student Intern",
            description : "DcentMASS is a consulting and placement firm in Bangalore, India that trains and grooms candidates with skills for placements.",
            link : "https://www.dcentmass.com/",
            duration : "May 2020 - Aug 2020",
            responsibilities : [
                "Experienced in UI development, testing, and customization of TAO and MOODLE platforms, contributing to a comprehensive skill set in these domains. Developed around 15% of their overall product plan."
            ]
        }
    ]
    return (
        <div ref={ref}>
            <ul className="experience-list">
              { interExperience.map((experience, index) => (
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

export default InternExperience;