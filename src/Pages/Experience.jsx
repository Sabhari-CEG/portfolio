import './Experience.css'
import g5 from "../images/g5.png"
import searce from "../images/searce.png"
import { Avatar } from 'antd';
import { useInView } from 'react-intersection-observer';
import useTypingEffect from './TypingEffect'
import InternExperience from './InternExperience'
import StartupExperience from './StartupExperience'
import VolunteerExperience from './VolunteeringExperience';



const Experience = () => {
    const { ref, inView } = useInView({
        threshold: 0.05, // Trigger when 10% of the component is in view
        triggerOnce: true // Trigger only once
    });

    const items = [ 
        "Experiences",
        ];
    const typedIndex = useTypingEffect(items);

    const experiences = [
        {
            logo : g5,
            name : "Galleri5, Bangalore, Karnataka, India",
            position : "Associate Manager - Software Engineering",
            description : "Galleri5 is an AI-powered influencer marketing platform that helps discover, collaborate,manage influencers.",
            link : "https://www.galleri5.com/",
            duration : "Jun 2023 - Present",
            responsibilities : [
                "Orchestrated the launch of internal admin app singlehandedly, which automates 80% of previous manual tasks. Thus reduced reliance on the tech team.",
                "Initiated and continuously enhanced an affiliate app product(nearly 15,000 active users and 30+ brands), spearheading its evolution with the support of a dynamic team of junior developers.",
                "Steered the strategic updates of the existing creator app(used by around 10,000 users), later taking a pivotal role in the seamless integration with the affiliate apps. Currently oversee the unified platform.",
                "Carried out perodical updates, bug fixes and feature addition to the main product of the galleri5 called brandsapp(used by almost 1000+ brands).",
                "Contributed to the initial development of a generative AI feature, utilizing the advanced Stable Diffusion XL LoRa model. producing results in approximately 30 seconds.",
                "Resolved the storage problem by migrating the data to GCP and creating a custom library for efficient data access. Thus reducing the storage cost by 30% and improving average latency from 5 to 2 seconds.",
            ]
        },
        {
            logo : searce,
            name : "Searce Inc, Bangalore, Karnataka, India",
            position : "Software Engineering",
            description : "Searce is a Google-partnered cloud technology service provider helping modernize businesses.",
            link : "https://www.searce.com/",
            duration : "Jul 2022 - Jun 2023",
            responsibilities : [
                "Addressed the client’s high storage costs, developed a custom Python library for Google Cloud Bucket, reducing expenses and ensuring compatibility with their existing legacy code. Thus optimizing their storage cost by 18%.",
                "Developed a ReactJS solution by integrating Google Maps and Route APIs to optimize and maintain truck traffic for a leading Dubai government logistics service. Thus reducing the truck waiting time at gates by 50 seconds at most.",
                "Partispated in Flutter Hackathon, built a e-commerce backend using GO Lang."
            ]
        }
    ]

    return (
      <div className="experience-container" ref={ref}>
          {/* <h2 >Experiences</h2> */}
          {inView && items.map((item, index) => (
            <h2 key={index} className={index <= typedIndex ? "typed-out" : ""} style={{marginBottom: "2vh", color: "#fac912", fontSize: "3vh"}}>
                {index === typedIndex ? <span>{item}<span className="cursor">_</span></span> : item}
            </h2>
            ))}
          <h2 className="Primary" style={{color : "#fac912"}}>Full-time Experiences</h2>
          <ul className="experience-list">
              {inView && experiences.map((experience, index) => (
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
          <div>
          <h2 className="Primary" style={{color : "#fac912"}}>Startup Experiences</h2>
          <StartupExperience />
          </div>
          <div>
          <h2 className="Primary" style={{color : "#fac912"}}>Internship Experiences</h2>
          <InternExperience />
          
          </div>
          <div>
          <h2 className="Primary" style={{color : "#fac912"}}>Volunteering Experiences</h2>
          <VolunteerExperience />
          </div>
      </div>
  );
  
   
}

export default Experience;


