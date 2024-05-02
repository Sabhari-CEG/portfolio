import "./Skills.css"
import { useInView } from 'react-intersection-observer';
import useTypingEffect from './TypingEffect';


import { Card, Button } from 'antd';
import { CalendarOutlined, LinkOutlined, HomeOutlined, LaptopOutlined } from '@ant-design/icons';
import SkillsAndTech from "./SkillsAndTech";
import LanguageSkills from "./LanguageSkills";
import WorkshopSkills from "./WorkshopSkills";
import CertificationSkills from "./CertificationSkills";


const Skills = () => {
    const { ref, inView } = useInView({
        threshold: 0.05, // Trigger when 10% of the component is in view
        triggerOnce: true // Trigger only once
    });
    const items = [ 
        "Skills",
        ];
    const typedIndex = useTypingEffect(items);

    

    

    

    
    return (
        <div ref={ref} className="skills-container">
            {inView && items.map((item, index) => (
            <h2 key={index} className={index <= typedIndex ? "typed-out" : ""} style={{marginBottom: "2vh", color: "#fac912", fontSize: "3vh"}}>
                {index === typedIndex ? <span>{item}<span className="cursor">_</span></span> : item}
            </h2>
            ))}
            <div>
            <h2 className="Primary" style={{color : "#fac912"}}>Languages Known</h2>
                <LanguageSkills />
            </div>
            
            <div>
            <h2 className="Primary" style={{color : "#fac912"}}>Skills and Technologies</h2>
                <SkillsAndTech />
            </div>

            <div>
            <h2 className="Primary" style={{color : "#fac912", margin: "4vh"}}>Workshops</h2>
            <WorkshopSkills />
            </div>

            <div>
            <h2 className="Primary" style={{color : "#fac912", margin: "4vh"}}>Certifications</h2>
                <CertificationSkills />
            </div>
  
        </div>
    );
}

export default Skills;