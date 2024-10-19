import React from 'react';
import { List } from 'antd';
import './projects.css'
import { useInView } from 'react-intersection-observer';
import { GithubOutlined } from '@ant-design/icons';



const uiucProjects = [
    {
      href : "https://github.com/Sabhari-CEG/SmartRoute-Optimizing-Urban-Navigation-with-Pathfinding-Algorithms",
      title : "SmartRoute: Optimizing Urban Navigation with Pathfinding Algorithms",
      description : "Demonstrated optimal city routes by implementing and comparing the efficiency of four advanced pathfinding algorithms, considering distance and time.",
      content : "Skills : C++, Algorithm, Optimization, Inference."
     },
     {
      href : "https://github.com/Sabhari-CEG/Benchmarking-Moving-Average-Crossover-Strategies-C-vs.-Go-vs.-Python-for-High-Frequency-Trading",
      title : "Benchmarking Moving Average Crossover Strategies C++ vs Go vs Python for High Frequency Trading",
      description : "Developed an algorithmic low latency trading simulator with backtesting using C++, Go, and Python, optimizing performance by 11x in Go through concurrent processing and achieving an execution time of 0.13s in Python using vectorized operations with pandas and NumPy.",
      content : "Skills : C++, Go, Python, Optimization, Algorithm, High Frequency, Trading, Finance, math."
     },
     {
      href : "https://github.com/Sabhari-CEG/Advanced-Obstacle-Detection-and-Trajectory-Planning-for-Autonomous-Flying-Robots",
      title : "Advanced Obstacle Detection and Trajectory Planning for Autonomous Flying Robots",
      description : "Designed and implemented an AI-powered obstacle detection and trajectory planning system for autonomous flying robots, boosting navigation safety and efficiency by 30%.",
      content : "Skills : Python, Machine Learning, Computer vision, Autonomous vehicle."
     },
     {
      href : "https://github.com/Sabhari-CEG/AutoInsight-LLM-AI-Intelligent-Car-Market-Analyzer-and-Assistant",
      title : "AutoInsigh LLM AI-Intelligent Car Market Analyzer and Assistant",
      description : "Developed AutoInsight AI, an AI-powered car buying assistant, integrating advanced data analysis and LLM-generated insights. Resulted in improved user engagement and reduced decision-making time by 40% for car buyers.",
      content : "Skills : Python, ML, LLMs, Data Analysis, data visualization."
     },
  ]



const UiucProjects = () => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the component is in view
    triggerOnce: true // Trigger only once
});


  return (
    <div ref={ref} className='outer-box'>
      
    <h2 style={{color: "#fac912"}} className='Primary'>UIUC Projects</h2>
    <List
    itemLayout="vertical"
    size="large"
    
    pagination={{
      onChange: (page) => {
        console.log('Page: ', page);
      },
      pageSize: 15,  // Display 10 items per page
    }}
    dataSource={uiucProjects}
    
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
  />
  </div>
  );
  
}
  

export default UiucProjects;
