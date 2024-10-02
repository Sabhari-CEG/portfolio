import React from 'react';
import { List } from 'antd';
import './projects.css'
import { useInView } from 'react-intersection-observer';
import { GithubOutlined } from '@ant-design/icons';



const startupProjects = [
  {
    href : null,
    title : "Flower shop billing software in regional language(JAVA).",
    description : "Processed 31,350 monthly transactions by developing a Java-based sales application for a flower shop, using JDBC for Oracle SQL connectivity and Swing for the frontend, tailored for the regional language.",
    content : "Skills : Java, Swing, JDBC, Oracle SQL."
   },
   {
    href : null,
    title : "Co-Sourced a company to make several websites.",
    description : "Deployed 4 custom websites by collaborating with a logo-making company and building ReactJS-based sites, hosted directly on the company's servers in Bangalore.",
    content : "Skills : ReactJS, HTML, CSS, Javascript, NodeJS, PHP, Hosting, MongoDB."
   },
   {
    href : null,
    title : "Bus ticket booking app(POC - Flutter).",
    description : "Delivered a successful proof of concept for a bus ticket booking app by developing it with Flutter and MongoDB, demonstrating core features before the client moved to larger consulting companies.",
    content : "Skills : Flutter, Mobile App Development, MongoDB."
   }
]



const StartupProjects = () => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the component is in view
    triggerOnce: true // Trigger only once
});


  return (
    <div ref={ref} className='outer-box'>
      
    <h2 style={{color: "#fac912"}} className='Primary'>Startup Projects</h2>
    <List
    itemLayout="vertical"
    size="large"
    
    pagination={{
      onChange: (page) => {
        console.log('Page: ', page);
      },
      pageSize: 15,  // Display 10 items per page
    }}
    dataSource={startupProjects}
    
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
  

export default StartupProjects;
