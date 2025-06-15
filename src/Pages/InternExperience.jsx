import './Experience.css'
import decntmass from "../images/dcentmass.jpeg"
import { Avatar } from 'antd';
import { useInView } from 'react-intersection-observer';
import uiuc from "../images/uiuc.jpg";
import epe from "../images/epe.png"

const InternExperience = () => {
    const { ref, inView } = useInView({
        threshold: 0.1, 
        triggerOnce: true 
    });

    const interExperience = [
        {
            logo : epe,
            name : "Electric Power Engineers",
            position : "Software Development Internship",
            description : "EPE is an energy consulting firm that provides expertise in power system planning, engineering, and grid modernization.",
            link : "https://epeconsulting.com/",
            duration : "May 2025 - Jul 2025",
            responsibilities : [
                "Delivered version 2 of the Insights app by refactoring 8 components and upgrading 15+ frontend components, driving a 30% performance boost through full-stack development with FastAPI, React, Vue, AWS, and Postgres.",
                "Engineered and deployed a next-gen authentication system with KeyCloak and OpenFGA, reducing login incidents by 40% and achieving enterprise grade security and scalability by replacing legacy Esri+Firebase infrastructure."
            ]
        },
        {
            logo : uiuc,
            name : "Gies College of Business - University of Illinois Urbana-Champaign",
            position : "Graduate Research Assistant",
            description : "Official buisness school of UIUC",
            link : "https://www.linkedin.com/school/giesbusiness/posts/?feedView=all",
            duration : "Feb 2025 - May 2025",
            responsibilities : [
                "Slashed stock-analysis effort by 70% by building a Python engine ingesting 7 APIs with weighted scoring, doubling daily trade signals to 200+.",
                "Achieved 98% entity-matching accuracy by fine tuning BERT on 10K+ variants and automating clustering, halving ingestion latency by 50%."
            ]
        },
        {
            logo : uiuc,
            name : "Siebel School of Computing and Data Science - University of Illinois Urbana-Champaign",
            position : "Course Assistant - CS222 Software Design Lab",
            description : "Official computer science school of UIUC",
            link : "https://www.linkedin.com/school/illinoissiebelschool/posts/?feedView=all",
            duration : "Jan 2025 - May 2025",
            responsibilities : [
                "Mentored 8 undergraduates 10+ hours/week in Agile SDLC and design patterns, driving a 95% on time project delivery and cutting post release defects by 30%.",
                "Architected a modular codebase and led peer reviews for 4 developers, boosting maintainability by 40% and accelerating bug fix turnaround by 25%."
            ]
        },
        {
            logo : decntmass,
            name : "DCENTMASS, Bangalore, Karnataka, India",
            position : "Student Intern",
            description : "DcentMASS is a consulting and placement firm in Bangalore, India that trains and grooms candidates with skills for placements.",
            link : "https://www.dcentmass.com/",
            duration : "May 2020 - Aug 2020",
            responsibilities : [
                "Expertise in UI development, testing, and customization of TAO and MOODLE platforms, contributing to a robust and comprehensive skill set in these domains. Played a key role in developing approximately 15% of their overall product plan, ensuring high-quality and user-friendly interfaces."
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