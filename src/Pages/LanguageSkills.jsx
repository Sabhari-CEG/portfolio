import "./Skills.css"
import { useInView } from 'react-intersection-observer';
import useTypingEffect from './TypingEffect';
import python from "../images/python.jpeg";
import js from "../images/javascript.png"
import java from "../images/java.png"
import go from "../images/go.png"
import reactjs from "../images/react.png"
import c from "../images/c.png"
import cpp from "../images/cpp.png"
import sql from "../images/sql.png"
import html from "../images/html.png"
import css from "../images/css.png"
import expressjs from "../images/expressjs.png"
import php from "../images/php.jpeg"
import bootstrap from "../images/bootstrap.jpeg"
import dart from "../images/dart.png"
import assembly from "../images/assembly.png"
import erlang from "../images/erlang.png"
import node from "../images/node.png"
import { Avatar, Card } from 'antd';




const LanguageSkills = () => {
    const { ref, inView } = useInView({
        threshold: 0.1, // Trigger when 10% of the component is in view
        triggerOnce: true // Trigger only once
    });
    const items = [ 
        "Languages Known",
        ];
    const typedIndex = useTypingEffect(items);
    const languageSkills = [
        {
            logo : python,
            name : "Python"
        },
        {
            logo : js,
            name : "Javascript"
        },
        {
            logo : reactjs,
            name : "React JS"
        },
        {
            logo: java,
            name : "Java"
        },
        {
            logo : go,
            name : "Go Lang"
        },
        {
            logo : c,
            name : "C"
        },
        {
            logo : cpp,
            name : "C++"
        },
        {
            logo : node,
            name : "Node JS"
        },
        {
            logo : expressjs,
            name : "Express JS"
        },
        {
            logo : sql,
            name: "SQL"
        },
        {
            logo: html,
            name: "HTML"
        },
        {
            logo : css,
            name : "CSS"
        },
        {
            logo : php,
            name: "PHP"
        },
        {
            logo : bootstrap,
            name : "Bootstrap"
        },
        {
            logo : dart,
            name : "Dart"
        },
        {
            logo : assembly,
            name : "High-Level Assembly"
        },
        {
            logo : erlang,
            name : "Erlang"
        }

    ]

    return (
            <div className="skills-grid" ref={ref}>
            {/* {inView && items.map((item, index) => (
            <h2 key={index} className={index <= typedIndex ? "typed-out" : ""} style={{marginBottom: "2vh", color: "#fac912", fontSize: "3vh"}}>
                {index === typedIndex ? <span>{item}<span className="cursor">_</span></span> : item}
            </h2>
            ))} */}
            
    {languageSkills.map((skill, index) => (
      <div key={index} className={`skill-flip-container ${inView ? 'flipped' : ''}`}>
        <div className="skill-flipper">
          <div className="skill-card-back">
          </div>
          <Card className="skill-card">
            <Avatar src={skill.logo} size={100} shape="square" className="skill-avatar" />
            <div className="skill-name">{skill.name}</div>
          </Card>
        </div>
      </div>
    ))}
  </div>
    )
}

export default LanguageSkills;