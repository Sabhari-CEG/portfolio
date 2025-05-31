import './AcademicBackground.css'
import ceg from "../images/CEG.png"
import uiuc from "../images/uiuc.jpg"
import { Avatar } from 'antd';
import { useInView } from 'react-intersection-observer';
import useTypingEffect from './TypingEffect';



const AcademicBackground = () => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the component is in view
    triggerOnce: true // Trigger only once
  });
  const items = [ 
    "Academic Background"
    ];
    const typedIndex = useTypingEffect(items);
    const schools = [
        {
            logo : uiuc,
            name : "University of Illinois Urbana - Champaign (Grainger College of Engineering), Urbana, Illinois",
            degree : "Master of Computer Science",
            field : "Computer Science",
            duration : "Fall 2024 - Spring 2026",
            cgpa : "CGPA : 3.88 / 4",
            courses : ["Database Systems", "Advanced Data Management", "Artificial Intelligence", "User-Centered Machine Learning", "Computer Security II", "Advanced Information Retrival", "CS Colloquium"]
        },
        {
            logo : ceg,
            name : "College of Engineering Guindy, Anna University, Chennai, India",
            degree : "Bachelor of Engineering",
            field : "Computer Science and Engineering",
            duration : "Fall 2018 - Spring 2022",
            cgpa : "CGPA : 8.91/10 (3.808 / 4)",
            courses : ["C",
            "Discrete Mathematics", "Data structures and Algorithms", "Probablity and Statistics", 
            "DBMS", "Computer Architecture", "OS",
            "Computer Networks", "Java", 
            "Linear Algebra", "Cloud Computing", "AI/ML",
            "Data Mining", "Deep Learning", 'Cryptography', 'IOT']
        }
    ]

    return (
      <div className="academic-container" ref={ref}>
        {inView &&  items.map((item, index) => (
            <h2 key={index} className={index <= typedIndex ? "typed-out" : ""} style={{marginBottom: "2vh", color: "#fac912",fontSize: "3vh"}}>
                {index === typedIndex ? <span>{item}<span className="cursor">_</span></span> : item}
            </h2>
            ))}
          {/* <h2 className="Primary">Academic Background</h2> */}
          <ul className="school-list">
              {inView && schools.map((school, index) => (
                  <li key={index} className="school-item">
                      <Avatar src={school.logo} size={100} shape="square" className="school-logo" />
                      <div className="school-info">
                          <h3 className="Primary" style={{fontSize: "2.5vh", marginBottom: "-0.5%"}}>{school.name}</h3>
                          <p className="Primary" style={{marginBottom: "-0.5%", fontSize: "2vh"}}>{school.degree}</p>
                          <p className="Primary" style={{marginBottom: "-0.5%", fontSize: "2vh"}}>{school.field}</p>
                          <p className="Primary" style={{marginBottom: "-0.5%", fontSize: "2vh"}}>{school.duration}</p>
                          {school.cgpa && (
                            <p className="Primary" style={{marginBottom: "-0.5%",fontSize: "2vh"}}>{school.cgpa}</p>
                          )}
                          {school.courses.length > 0 ? (
                            <p className="Primary" style={{fontSize: "2vh"}}>
                            Courses : {school.courses.join(", ")}
                            </p>
                          ) : (<p></p>)}
                          
                      </div>
                  </li>
              ))}
          </ul>
      </div>
  );
  
   
}

export default AcademicBackground;


