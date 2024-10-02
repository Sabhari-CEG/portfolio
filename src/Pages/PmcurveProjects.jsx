import React from 'react';
import { List } from 'antd';
import './projects.css'
import { useInView } from 'react-intersection-observer';
import { GithubOutlined } from '@ant-design/icons';



const pmcurveProjects = [
    {
      href : null,
      title : "pmcurve content delivery and management system",
      description : "Enabled secure course management for admins by developing a content management system with JWT authentication for user access, utilizing Express.js API for SQL database integration and React.js for the front-end.",
      content : "Skills : SQL, Database Management, Authentication, Express JS, React JS, Node JS."
     },
     {
      href : null,
      title : "pmcurve Edtech platform",
      description : "Delivered a dynamic user experience by developing a MERN stack application with a SQL backend, powered by Express.js API for integration and React.js for the front-end.",
      content : "Skills : SQL, Database Management, Authentication, Express JS, React JS, Node JS."
     },
     {
      href : "https://github.com/Sabhari-CEG/django-training-blog-app",
      title : "Django Full stack Blog app.",
      description : "Enabled full CRUD functionality for users by designing and implementing a blog application using Django with an aesthetically appealing interface.",
      content : "Skills : Python, Django, HTML, CSS, Full-stack."
     },
     {
      href : "https://github.com/Sabhari-CEG/django-library-system",
      title : "Django Full stack library system.",
      description : "Streamlined library operations by architecting a comprehensive library management system in Django, incorporating user management and administrative controls for efficient organization.",
      content : "Skills : Python, Django, HTML, CSS, Full-stack."
     },
  ]



const PmcurveProjects = () => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the component is in view
    triggerOnce: true // Trigger only once
});


  return (
    <div ref={ref} className='outer-box'>
      
    <h2 style={{color: "#fac912"}} className='Primary'>pmcurve Projects</h2>
    <List
    itemLayout="vertical"
    size="large"
    
    pagination={{
      onChange: (page) => {
        console.log('Page: ', page);
      },
      pageSize: 15,  // Display 10 items per page
    }}
    dataSource={pmcurveProjects}
    
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
  

export default PmcurveProjects;
