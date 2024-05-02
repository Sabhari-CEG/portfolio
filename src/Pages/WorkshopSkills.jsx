import "./Skills.css"
import { useInView } from 'react-intersection-observer';
import gai from "../images/google_AI.png"
import aufrg from "../images/aufrg.png"
import { Card, Button } from 'antd';
import { CalendarOutlined, LinkOutlined, HomeOutlined, LaptopOutlined } from '@ant-design/icons';



const WorkshopSkills = () => {
    const { ref, inView } = useInView({
        threshold: 0.1, // Trigger when 10% of the component is in view
        triggerOnce: true // Trigger only once
    });
    
    const workshops = [
        {
            thumb : gai,
            name : "Explore ML",
            organization : "Organization : Google",
            date : "Date : Dec 2019",
            description : "I had succesfully completed the Google sponsored university level Explore ML one day workshop. I had completed both the Beginner and Intermediate track",
            certificate : "https://drive.google.com/file/d/1JmlYZqRNbKgGLx7_jWTegM1oV9GKmdnC/view",
            beginner : "https://drive.google.com/file/d/1nchGkFIaAajecZSaM6yA6bWHQAjyVTqV/view",
            intermediate : "https://drive.google.com/file/d/1eF0Ib6GvsHYDAJmRrNPJJYNEO3BWHyJa/view"
        },
        {
            thumb : aufrg,
            name : "Career Guidance (AI and ML)",
            organization : "Organization : AU-FRG",
            date : "Date : Nov 2019 - Dec 2019",
            description : "I had succesfully completed the AU-FRG university level Hands on training 12 days workshop on AI and ML on Nov 2019. I had completed the workshop with 88% score.",
            certificate : "https://drive.google.com/file/d/1OeZugwdajgr9_nNtXV1kpQ-namnLqLIj/view",
        }
    ]
    return (
        <div>
            <div className="workshop-container" ref={ref}>
      { workshops.map((workshop, index) => (
        <Card key={index} className="workshop-card">
          <div className="workshop-content">
            <img src={workshop.thumb} className="workshop-avatar" />
            <div className="workshop-details">
              <h3>{workshop.name}</h3>
              <p><HomeOutlined /> {workshop.organization}</p>
              <p><CalendarOutlined /> {workshop.date}</p>
              <p>{workshop.description}</p>
              {workshop.certificate && (
                <Button type="link" icon={<LinkOutlined />} href={workshop.certificate} target="_blank" style={{color : "#fac912", fontWeight: "bolder", fontSize: "1rem"}}>
                  Certificate
                </Button>
              )}
              {workshop.beginner && (
                <Button type="link" icon={<LinkOutlined />} href={workshop.beginner} target="_blank" style={{color : "#fac912", fontWeight: "bolder", fontSize: "1rem"}}>
                Beginner Certificate
              </Button>
              )}
              {workshop.intermediate && (
                <Button type="link" icon={<LinkOutlined />} href={workshop.intermediate} target="_blank" style={{color : "#fac912", fontWeight: "bolder", fontSize: "1rem"}}>
                Intermediate Certificate
              </Button>
              )}
            </div>
          </div>
        </Card>
      ))}
    </div>
        </div>
    )
}

export default WorkshopSkills;