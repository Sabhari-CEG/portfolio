import "./contact.css"
import { MailOutlined,PhoneOutlined, LinkedinOutlined, GithubOutlined } from '@ant-design/icons';
import { useInView } from 'react-intersection-observer';
import useTypingEffect from './TypingEffect';


const Contact = () => {
    const { ref, inView } = useInView({
        threshold: 0.1, // Trigger when 10% of the component is in view
        triggerOnce: true // Trigger only once
    });
    const items = [ 
        "Get in touch with me!",
        ];
    const typedIndex = useTypingEffect(items);

    return (
        <div className="contact-footer" ref={ref}>
            {inView && items.map((item, index) => (
            <h2 key={index} className={index <= typedIndex ? "typed-out" : ""} style={{marginBottom: "2vh", color: "black", fontSize: "3vh"}}>
                {index === typedIndex ? <span>{item}<span className="cursor">_</span></span> : item}
            </h2>
            ))}
            <p><a href="mailto:sabhari2@illinois.edu" target="_blank" rel="noopener noreferrer"><MailOutlined className="icons"/>sabhari2@illinois.edu</a></p>
            <p><a href="mailto:sabhari2000@gmail.com" target="_blank" rel="noopener noreferrer"><MailOutlined className="icons"/>sabhari2000@gmail.com</a></p>
            <p><a href="tel:8220265629" className="contact-link"><PhoneOutlined className="icons"/> +91 82202 65629</a></p>
            <p><a href="https://www.linkedin.com/in/sabhari-p/" target="_blank" rel="noopener noreferrer"><LinkedinOutlined className="icons"/>Sabhari P on Linkedin</a></p>
            <p><a href="https://github.com/Sabhari-CEG?tab=repositories" target="_blank" rel="noopener noreferrer"><GithubOutlined  className="icons"/>Sabhari on Github</a></p>
        </div>
    )
}

export default Contact;