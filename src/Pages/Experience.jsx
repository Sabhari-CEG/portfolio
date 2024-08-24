import './Experience.css'
import g5 from "../images/g5.png"
import searce from "../images/searce.png"
import pmcurve from "../images/pmcurve.jpeg"
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
            logo : pmcurve,
            name : "pmcurve, Bangalore, Karnataka, India",
            position : "Software Developer",
            description : "A comprehensive platform offering professional training and continuous learning solutions for individuals and organizations.",
            link : "https://www.pmcurve.com/",
            duration : "May 2024 - Aug 2024",
            responsibilities : [
                "Architected the underlying infrastructure of products, making critical decisions on the technologies to use, resulting in a 40% increase in scalability and a 25% boost in system efficiency.",
                "Developed a content delivery and management system using the MERN stack, allowing the creation and modification of content for 20+ courses, reducing content update time by 50%.",
                "Built the main edtech platform with the MERN stack, successfully managing over 1,000 active concurrent users, which led to a 30% increase in user engagement and a 20% decrease in downtime 40% decrease in operating cost."
            ]
        },
        {
            logo : g5,
            name : "Galleri5, Bangalore, Karnataka, India",
            position : "Associate Manager - Software Engineering",
            description : "Galleri5 is an AI-powered influencer marketing platform that helps discover, collaborate,manage influencers.",
            link : "https://www.galleri5.com/",
            duration : "Jun 2023 - May 2024",
            responsibilities : [
                "Spearheaded the launch of an internal admin app, automating 80% of manual tasks, reducing the tech team's workload by 50%, and saving 120+ hours per month.",
                "Pioneered and continuously enhanced an affiliate app product, growing it to 15,000 active users and 30+ brands, increasing monthly revenue by 20%. Led a team of 2 junior developers in its ongoing evolution.",
                "Directed strategic updates and integration of the creator app, used by 10,000 users, with the affiliate app, resulting in a 40% increase in user retention and a seamless transition to a unified platform.",
                "Managed periodic updates, bug fixes, and feature additions for Galleri5's flagship product, BrandsApp, utilized by 1,000+ brands, maintaining a 99.9% uptime and improving customer satisfaction by 15%.",
                "Contributed to the development of a generative AI feature using the advanced Stable Diffusion XL LoRa model, achieving results in 30 seconds, and enhancing image generation accuracy by 25%.",
                "Optimized storage solutions by migrating data to GCP and developing a custom library for efficient data access, reducing storage costs by 30% and improving average latency from 5 seconds to 2 seconds.",
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
                "Reduced client storage costs by 18% by developing a custom Python library for Google Cloud Bucket, ensuring seamless compatibility with existing legacy code and saving clients $10,000 annually in storage expenses.",
                "Developed a ReactJS solution integrating Google Maps and Route APIs for a leading Dubai government logistics service, optimizing truck traffic and reducing gate waiting times by 50 seconds per trip, increasing overall logistics efficiency by 15%.",
                "Earned 1 associate-level and 3 professional-level GCP certifications, demonstrating advanced expertise in Google Cloud Platform and enhancing project success rates by 20% through improved cloud solution implementation.",
                "Built an e-commerce backend using Go Lang, achieving 1st place out of 10 teams, demonstrating proficiency in backend development and effective collaboration in a competitive environment.",
                "Completed training on relational databases and gained hands-on experience with the MERN stack, enhancing full-stack development capabilities and improving project completion times by 25%."
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


