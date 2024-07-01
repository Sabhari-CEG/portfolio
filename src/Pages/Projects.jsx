import React from 'react';
import { List } from 'antd';
import './projects.css'
import { useInView } from 'react-intersection-observer';
import useTypingEffect from './TypingEffect'
import { GithubOutlined } from '@ant-design/icons';
import StartupProjects from './StartupProjects';
import SearceProjects from './SearceProjects';
import Galleri5Projects from './Galleri5Projects';
import PmcurveProjects from './PmcurveProjects';

const data = [
  {
    href : null,
    title : "School database(MySQL) Management",
    description : "Developed a fully normalized SQL database schema populated with public school data and built a website using Node.js, HTML, and CSS, with PHP handling CRUD operations to interact with the database. The structure works well and fast with around 5K students records.",
    content : "Skills : HTML, CSS, Javascript, NodeJS, PHP, MySQL, Normalization",
   },
   {
    href : null,
    title : "5 layer internet protocol stack simulation.",
    description : "Implemented a C socket connection to transfer messages between systems on the same WiFi, where the sender encapsulates data according to a specified protocol and the receiver decodes it accordingly. It achieves a 104kb of data transfer in 58ms.",
    content : "Skills : C Programming, Socket Programming, Network"
   },
   {
    href : null,
    title : "CPU Scheduling algorithm simulation.",
    description : "Implemented a hybrid CPU scheduling algorithm in C that manages a pool of processes, handling their states and preemptively switching them for I/O operations, ensuring efficient execution and state management for each process. Due to this preemptive approach, it takes about 50% of the linear turn around time",
    content : "Skills : C Programming, Operating System, Scheduling Algorithm"
   },
   {
    href : "https://github.com/Sabhari-CEG/DC-GAN",
    title : "Random animie generation using DCGAN.",
    description : "Designed a DCGAN (Deep Convolutional Generative Adversarial Network) to create cartoon characters from existing images, requiring extensive experimentation with network layers, channels, and filter sizes with an accuracy of 93.2%(resembling the cartoon without noise).",
    content : "Skills : Python, ML, Deep CNN, DL"
   },
   {
    href : "https://github.com/Sabhari-CEG/Vehicle-Routing-genetic-algorithm",
    title : "Solving Vehicle Routing Problem using Genetic Algorithm.",
    description : "Generating an initial population with all possible routes, subjecting them to fitness evaluation for route selection, and iteratively mutating routes until the optimal distance was achieved. Found fast and effective over 17 locations.",
    content : "Skills : Python, ML, NP-Hard problem, Problem solving, Algorithm"
   },
   {
    href : null,
    title : "GAN based DAY-TO-NIGHT style transfer for Vehicle detection.",
    description : "Applied a day-to-night GAN transformation to the daytime images and retrained the model, resulting in a remarkable improvement the accuracy by 13% in nights.",
    content : "Skills : Python, ML, GAN, YOLO, Vehicle Detection, Performance improvement, Dataset generation, Style transfer"
   },
   {
    href : "https://github.com/Sabhari-CEG/Car_service_application_java",
    title : "Car service software(JAVA full-stack).",
    description : "Analyzed the necessary features for a car service software and implemented a full-stack Java application, using Java for the backend with JDBC for PostgreSQL connectivity, and Java Swing components for the frontend.",
    content : "Skills : JAVA, JDBC, JAVA SWING, PostgreSQL, Object Oriented Approach"
   },
   {
    href : null,
    title : "Hybrid Movie Recommendation System.",
    description : "Developed a hybrid movie recommendation system that combines content-based filtering and collaborative filtering. It searches for a movie in our dataset and, if not found, uses a browser request with BeautifulSoup to scrape and utilize the movie's metadata for recommendations. This system aligns with Netflix's recommendations 82% of the time.",
    content : "Skills : Python, dataset cleaning, web-scrapping, Recommendation system"
   },
   {
    href : null,
    title : "Restaurant's location, menu and success recommendation",
    description : "Performed descriptive data mining on historical Zomato order data to analyze order patterns in Bangalore, providing recommendations for potential shop owners on optimal locations, menu offerings, pricing, shop timings, and promotional strategies to ensure a successful business. 93.3% of times our recommended kinds of resturants were success in that locality.",
    content : "Skills : Python, data mining, data science, data integration, decision making, association rule mining, data visualization"
   },
   {
    href : "https://github.com/Sabhari-CEG/smart-car-parking-using-fogism",
    title : "Smart car parking using IFogSim.",
    description : "Developed a system that utilizes sensors, cameras, and edge devices to gather and process parking-related data. iFogSim simulations demonstrate the efficiency of this fog-based system, showing significant reductions in latency and network usage compared to traditional cloud-based deployments.",
    content : "Skills : JAVA, Cloud computing, IOT, Fog-computing, Sensors."
   },
   {
    href : null,
    title : "Semantic Analysis of Product reviews.",
    description : "Conducted a semantic analysis of various Amazon products, transforming their reviews into ratings based on positive or negative sentiments, achieving an impressive accuracy of 94.6%.",
    content : "Skills : NLP, Python, data analysis."
   },
   {
    href : "https://github.com/Sabhari-CEG/currency-classification",
    title : "Classifications in ML.",
    description : "I implemented a classification algorithm using a Convolutional Neural Network (CNN) to accurately distinguish between different currencies and animals, achieving over 90% accuracy in both classifications.",
    content : "Skills : Python, ML, Classification algorithms."
   },
   {
    href : "https://github.com/Sabhari-CEG/CEG-TECH-FORUM",
    title : "CEG Tech-forum's game website.",
    description : "As the tech head of the CEG Tech Forum, a university-level tech club recognized by UNESCO for conducting national-level competitions, I designed various game and landing websites to support and enhance the club's activities.",
    content : "Skills : MERN, ReactJS, NodeJS, SQL."
   },
   {
    href : null,
    title : "CSEA official website for 2021 - 2022.",
    description : "As an active member of CSEA, the official department club, I developed the department's official website for the years 2021 and 2022.",
    content : "Skills : ReactJS, Javascript, HTML, CSS, Bootstrap, cloud and hosting."
   },
   {
    href : "https://github.com/Sabhari-CEG/WEATHER-REPORT",
    title : "Weather Report webiste",
    description : "Designed a responsive website that fetches the weather from 3rd party api and display it in a visually pleasing manner.",
    content : "Skills : Javascript, HTML, CSS, Bootstrap, API Integration."
   }
]


const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the component is in view
    triggerOnce: true // Trigger only once
});

const items = [ 
    "Projects",
    ];
const typedIndex = useTypingEffect(items);
  return (
    <div>
    <div ref={ref} className='outer-box'>
      {inView && items.map((item, index) => (
            <h2 key={index} className={index <= typedIndex ? "typed-out" : ""} style={{marginBottom: "2vh", color: "#fac912", fontSize: "3vh"}}>
                {index === typedIndex ? <span>{item}<span className="cursor">_</span></span> : item}
            </h2>
            ))}
    <h2 style={{color: "#fac912"}} className='Primary'>Undergraduate Projects</h2>
    <div className='inner-box'>
    {inView &&  <List
    itemLayout="vertical"
    size="large"
    
    pagination={{
      onChange: (page) => {
        console.log('Page: ', page);
      },
      pageSize: 15,  // Display 10 items per page
    }}
    dataSource={data}
    
    renderItem={item => (
      <List.Item
      style={{color: "yellow"}}
        key={item.title}
        
      >
        <List.Item.Meta
          title={item.href !== null ? 
          <h3 
          className='project-title'
          style={{cursor: "pointer" }}
          onClick={() => window.open(item.href, '_blank')}>
            {item.title}
          </h3> :
          <h3
          className='project-title'
          > {item.title} </h3>
          }
          description={<p className='project-description'>{item.description}</p>}
        />
        <p className='project-content'>{item.content}</p>
        {item.href !== null && (
          <p
          className='project-git'
          style={{cursor: "pointer" }}
          onClick={() => window.open(item.href, '_blank')}>
            <GithubOutlined /> View code
          </p>
        ) 
          }
      </List.Item>
    )}
  />}
  </div>
  </div>
  <div>
    <StartupProjects />
  </div>
  <div>
    <SearceProjects />
  </div>
  <div>
    <Galleri5Projects />
  </div>
  <div>
    <PmcurveProjects />
  </div>
  </div>
  );
  
}
  

export default Projects;
