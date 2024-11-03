import "./Skills.css"
import { useInView } from 'react-intersection-observer';
import useTypingEffect from './TypingEffect';
import ds from "../images/data-structure.jpg"
import algo from "../images/algorithm.jpg"
import fullstack from "../images/fullstack.png"
import sde from "../images/software-developmentr.jpg"
import api from "../images/api-development.png"
import web from "../images/web-development.jpg"
import problemsolving from "../images/problem-solving.jpg"
import responsive from "../images/responsive-design.jpg"
import cicd from "../images/ci-cd.png"
import oops from "../images/oops.jpg"
import cloud from "../images/cloud-computing.jpg"
import network from "../images/computer-networks.jpg"
import db from "../images/db.jpg"
import debug from "../images/debug.jpg"
import cs from "../images/cybersecurity.jpg"
import performance from "../images/performance-optimization.jpg"
import mern from "../images/MERN.jpg"
import git from "../images/git.jpg"
import dock from "../images/docker.png"
import st from "../images/software-testing.jpg"
import jdbc from "../images/JDBC.png"
import os from "../images/multiple-os.jpg"
import probablity from "../images/probability-and-statistics.jpg"
import ml from "../images/ML.jpg"
import nn from "../images/neural-network.jpg"
import dl from "../images/deep-learning.jpg"
import gan from "../images/GAN.png"
import genai from "../images/generativeAI.jpg"
import django from "../images/django.png"
import mobileAppDev from "../images/mobile_app_development.webp"

import { Avatar, Card } from 'antd';


const SkillsAndTech = () => {
    const { ref, inView } = useInView({
        threshold: 0.05, // Trigger when 10% of the component is in view
        triggerOnce: true // Trigger only once
    });
    const items = [ 
        "Skills and Technologies",
        ];
    const typedIndex = useTypingEffect(items);
    const skillsTechnologies = [
        {
            logo : ds,
            name : "Data structures"
        },
        {
            logo : algo,
            name : "Algorithm"
        },
        {
            logo : fullstack,
            name : "Full-stack Development"
        },
        {
            logo : mern,
            name : "MERN Stack"
        },
        {
            logo : django,
            name : "Django Full stack development"
        },
        {
            logo : sde,
            name : "Software Development and Maintenance"
        },
        {
            logo : api,
            name : "API Development"
        },
        {
            logo : web,
            name : "Web Development"
        },
        {
            logo : mobileAppDev,
            name : "Mobile Application Development"
        },
        {
            logo : problemsolving,
            name : "Problem Solving"
        },
        {
            logo : responsive,
            name : "Responsive Design"
        },
        {
            logo : cicd,
            name : "CI / CD"
        },
        {
            logo : oops,
            name : "Object Oriented Programming"
        },
        {
            logo : performance,
            name : "Performance Optimization"
        },
        {
            logo : cloud,
            name : "Cloud Computing and Storage"
        },
        {
            logo : network,
            name : "Networks"
        },
        {
            logo : db,
            name : "Database Management, Optimization and Analysis"
        },
        {
            logo : debug,
            name : "Debugging"
        },
        {
            logo : cs,
            name : "Cyber Security"
        },
        {
            logo : git,
            name : 'GIT'
        },
        {
            logo : dock,
            name : "Docker"
        },
        {
            logo : st,
            name : "Software Testing"
        },
        {
            logo : jdbc,
            name : "JDBC"
        },
        {
            logo : os,
            name : "Multiple OS"
        },
        {
            logo : probablity,
            name : "Probability and statistics"
        },
        {
            logo : ml,
            name : "Machine Learning (AI)"
        },
        {
            logo : nn,
            name : "Neural Network"
        },
        {
            logo : dl,
            name : "Deep Learning"
        },
        {
            logo : gan,
            name : "Generative Adversarial Network"
        },
        {
            logo : genai,
            name : "Generative AI"
        }

    ]
    return (
        <div>
            <div className="skills-grid" ref={ref}>
            
    {skillsTechnologies.map((skill, index) => (
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
        </div>
    )
}

export default SkillsAndTech;