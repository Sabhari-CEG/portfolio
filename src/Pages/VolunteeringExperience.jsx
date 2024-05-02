import './Experience.css'
import enantra from "../images/enantra.png"
import ctf from "../images/ctf.jpeg"
import acm from "../images/acm.jpeg"
import csea from "../images/csea.png"
import { Avatar } from 'antd';
import { useInView } from 'react-intersection-observer';

const VolunteerExperience = () => {
    const { ref, inView } = useInView({
        threshold: 0.1, 
        triggerOnce: true 
    });

    const VolunteerExperience = [
        {
            logo : csea,
            name : "CSEA CEG, Anna University, Chennai, India",
            position : "HR and Logistics Coordinator",
            description : "CSEA-CEG, is a nonprofit organization that is part of the Department of Computer Science and Engineering (DCSE) of the College of Engineering Guindy (CEG) in Chennai, Tamil Nadu.",
            link : "https://cseaceg.org.in/",
            duration : "Jun 2021 - Jul 2022",
            responsibilities : [
                "Engineered the official CSEA website in 2021, establishing a digital cornerstone for the association.",
                "Planned and managed the national level mega symposium 'Abacus 22' and brought around 15000 USD sponsership for the department and 15+ internship opportunities.",
                "Conducted promotional event named 'Reach 22' to pull crowd towards the symposium.",
                "Conducted and managed the Sync, the intra college symposium."
            ],
            appreciationLetter : "https://drive.google.com/file/d/1SONHwFThxhuOCM9kpWGwmmWaI0LMeKAM/view"
        },
        {
            logo : acm,
            name : "ACM CEG, Anna University, Chennai, India",
            position : "Volunteer",
            description : "ACM CEG, is the official student chapter of the Association for Computing Machinery (ACM) at Anna University.",
            link : "https://auceg.acm.org/",
            duration : "Jun 2021 - Jul 2022",
            responsibilities : [
                "Conducted additional evening classes on Data structures and Algorithms for juniors, who found it hard to catch up with the lectures due to diverse educational backgrounds.",
                "Conducted critical thinking and problem solving sessions to improve uplift the professional path of juniors",
                "Orchestrated numerous hackathons to bolster juniors' proficiency in competitive programming, fostering an environment of learning and growth."
            ]
        },
        {
            logo : ctf,
            name : "CEG Tech Forum, Anna University, Chennai, India",
            position : "Technical Head",
            description : "The CEG Tech Forum (CTF) is a non-profit organization run by students that is the center of all technical pursuits at CEG.",
            link : "https://cegtechforum.in/",
            duration : "Jan 2021 - Jul 2022",
            responsibilities : [
                "Played a pivotal role in the development and management of the club's tech products for over a year, driving innovation and operational excellence.",
                "Kurukshetra is an international techno-management fest recoginized by UNESCO and conducted by CTF",
                "I had developed quiz game websites for kurukshetra as a part of my role."
            ]
        },
        {
            logo : enantra,
            name : "Enantra, Anna University, Chennai, India",
            position : "Volunteer",
            description : "Enantra is an event that aims to empower and inspire the youth with the spirit of entrepreneurship.",
            link : "http://auced.com/enantra/",
            duration : "Feb 2019 - May 2019",
            responsibilities : [
                "Volunteered in planning and managing the events.",
                "Inspired and spreaded the enterprenurship ideas."
            ]
        }
    ]

    return (
        <div ref={ref}>
            <ul className="experience-list">
              {VolunteerExperience.map((experience, index) => (
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
                            {experience?.appreciationLetter && <div>
                                <h4 className="Primary" style={{marginBottom: "-0.5%", fontSize: "2vh"}} onClick={() => window.open(experience.appreciationLetter, '_blank')}>View Appreciation Letter</h4>
                                </div>}

                      </div>
                  </li>
              ))}
          </ul>
        </div>
    );
}

export default VolunteerExperience;