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
import UiucProjects from './UiucProjects';

const data = [
  {
    href : null,
    title : "School database(MySQL) Management",
    description : "Achieved a high-performing database structure as measured by handling 5K student records efficiently by developing a normalized SQL schema and a website using Node.js, PHP, HTML, and CSS for CRUD operations.",
    content : "Skills : HTML, CSS, Javascript, NodeJS, PHP, MySQL, Normalization",
   },
   {
    href : null,
    title : "5 layer internet protocol stack simulation.",
    description : "Transferred 104kb of data in 58ms by implementing a C socket connection that encapsulates and decodes data using a specified protocol between systems on the same WiFi.",
    content : "Skills : C Programming, Socket Programming, Network"
   },
   {
    href : null,
    title : "CPU Scheduling algorithm simulation.",
    description : "Reduced linear turnaround time by 50% by implementing a hybrid CPU scheduling algorithm in C to manage and preemptively switch process states during I/O operations.",
    content : "Skills : C Programming, Operating System, Scheduling Algorithm"
   },
   {
    href : "https://github.com/Sabhari-CEG/DC-GAN",
    title : "Random animie generation using DCGAN.",
    description : "Achieved 93.2% accuracy in generating cartoon images by designing a DCGAN and experimenting with network layers, channels, and filter sizes.",
    content : "Skills : Python, ML, Deep CNN, DL"
   },
   {
    href : "https://github.com/Sabhari-CEG/Vehicle-Routing-genetic-algorithm",
    title : "Solving Vehicle Routing Problem using Genetic Algorithm.",
    description : "Optimized route selection across 17 locations by generating an initial population, evaluating fitness, and iterating mutations to find the shortest route efficiently.",
    content : "Skills : Python, ML, NP-Hard problem, Problem solving, Algorithm"
   },
   {
    href : null,
    title : "GAN based DAY-TO-NIGHT style transfer for Vehicle detection.",
    description : "Improved nighttime image transformation accuracy by 13% by applying a day-to-night GAN transformation and retraining the model.",
    content : "Skills : Python, ML, GAN, YOLO, Vehicle Detection, Performance improvement, Dataset generation, Style transfer"
   },
   {
    href : "https://github.com/Sabhari-CEG/Car_service_application_java",
    title : "Car service software(JAVA full-stack).",
    description : "Designed a full-stack car service software by analyzing key features and implementing a Java application with JDBC for PostgreSQL connectivity and Java Swing for the frontend.",
    content : "Skills : JAVA, JDBC, JAVA SWING, PostgreSQL, Object Oriented Approach"
   },
   {
    href : null,
    title : "Hybrid Movie Recommendation System.",
    description : "Aligned movie recommendations with Netflix 82% of the time by developing a hybrid recommendation system using content-based and collaborative filtering with BeautifulSoup for external movie metadata.",
    content : "Skills : Python, dataset cleaning, web-scrapping, Recommendation system"
   },
   {
    href : null,
    title : "Restaurant's location, menu and success recommendation",
    description : "Helped 93.3% of recommended restaurants succeed by performing data mining on Zomato order data to provide insights on optimal locations, menu offerings, pricing, and shop timings in Bangalore.",
    content : "Skills : Python, data mining, data science, data integration, decision making, association rule mining, data visualization"
   },
   {
    href : "https://github.com/Sabhari-CEG/smart-car-parking-using-fogism",
    title : "Smart car parking using IFogSim.",
    description : "Reduced latency and network usage by developing a fog-based parking system using iFogSim simulations to process data from sensors and cameras, demonstrating efficiency over traditional cloud-based systems.",
    content : "Skills : JAVA, Cloud computing, IOT, Fog-computing, Sensors."
   },
   {
    href : null,
    title : "Semantic Analysis of Product reviews.",
    description : "Achieved 94.6% sentiment analysis accuracy by conducting a semantic analysis of Amazon product reviews and transforming them into ratings based on sentiment.",
    content : "Skills : NLP, Python, data analysis."
   },
   {
    href : "https://github.com/Sabhari-CEG/currency-classification",
    title : "Classifications in ML.",
    description : "Classified currencies and animals with over 90% accuracy by implementing a CNN-based classification algorithm.",
    content : "Skills : Python, ML, Classification algorithms."
   },
   {
    href : "https://github.com/Sabhari-CEG/CEG-TECH-FORUM",
    title : "CEG Tech-forum's game website.",
    description : "Supported national-level competitions by designing game and landing websites as the tech head of CEG Tech Forum, a UNESCO-recognized university tech club.",
    content : "Skills : MERN, ReactJS, NodeJS, SQL."
   },
   {
    href : null,
    title : "CSEA official website for 2021 - 2022.",
    description : "Developed the official department website for the years 2021 and 2022 as an active member of CSEA, the official department club.",
    content : "Skills : ReactJS, Javascript, HTML, CSS, Bootstrap, cloud and hosting."
   },
   {
    href : "https://github.com/Sabhari-CEG/WEATHER-REPORT",
    title : "Weather Report webiste",
    description : "Displayed real-time weather data by designing a responsive website that fetches data from a third-party API and presents it visually.",
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
  <div>
    <UiucProjects />
  </div>
  </div>
  );
  
}
  

export default Projects;
