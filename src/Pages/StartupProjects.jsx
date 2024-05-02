import React from 'react';
import { List } from 'antd';
import './projects.css'
import { useInView } from 'react-intersection-observer';
import { GithubOutlined } from '@ant-design/icons';



const startupProjects = [
  {
    href : null,
    title : "Flower shop billing software in regional language(JAVA).",
    description : "Developed a software application for a flower shop, tailored to operate in our regional language. It records individual sales transactions(30 days * ~1045 users = ~31350 transactions a month) and generates monthly bill summaries. This software was entirely written in Java, using JDBC for Oracle SQL server connectivity and Swing for the frontend.",
    content : "Skills : Java, Swing, JDBC, Oracle SQL."
   },
   {
    href : null,
    title : "Co-Sourced a company to make several websites.",
    description : "Collaborated with a logo-making company based in Bangalore, which specializes in creating custom logos for clients. Leveraging my expertise, I accessed the company's servers to build and deploy custom websites(made around 4 websites) using ReactJS, and hosted these sites directly on their servers.",
    content : "Skills : ReactJS, HTML, CSS, Javascript, NodeJS, PHP, Hosting, MongoDB."
   },
   {
    href : null,
    title : "Bus ticket booking app(POC - Flutter).",
    description : "Undertook a proof of concept (POC) for a bus ticket booking app for a client, developing it with basic features using Flutter and MongoDB. The POC was successful, but the client ultimately chose to proceed with larger consulting companies for further development.",
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
