import React from 'react';
import { List } from 'antd';
import './projects.css'
import { useInView } from 'react-intersection-observer';
import { GithubOutlined } from '@ant-design/icons';



const pmcurveProjects = [
    {
      href : null,
      title : "pmcurve content delivery and management system",
      description : "Developed a robust content management system with admin privileges, utilizing JWT authentication for secure user ID and password access. This application enables the creation and management of courses and content, featuring a SQL database accessed via Express.js API and a React.js front-end.",
      content : "Skills : SQL, Database Management, Authentication, Express JS, React JS, Node JS."
     },
     {
      href : null,
      title : "pmcurve Edtech platform",
      description : "Developed using the MERN stack with a SQL database backend, powered by Express.js API for seamless integration and React.js for a dynamic front-end user experience.",
      content : "Skills : SQL, Database Management, Authentication, Express JS, React JS, Node JS."
     },
     {
      href : "https://github.com/Sabhari-CEG/django-training-blog-app",
      title : "Django Full stack Blog app.",
      description : "Designed and implemented a feature-rich blog application using Django, encompassing all CRUD (Create, Read, Update, Delete) operations with an aesthetically appealing user interface.",
      content : "Skills : Python, Django, HTML, CSS, Full-stack."
     },
     {
      href : "https://github.com/Sabhari-CEG/django-library-system",
      title : "Django Full stack library system.",
      description : "Architected and implemented a comprehensive library management system using Django, incorporating functionalities for  user management, and administrative controls, ensuring efficient and organized library operations.",
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
