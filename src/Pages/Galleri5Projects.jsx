import React from 'react';
import { List } from 'antd';
import './projects.css'
import { useInView } from 'react-intersection-observer';
import { GithubOutlined } from '@ant-design/icons';



const galleri5Projects = [
    {
      href : "https://affiliate.galleri5.com/",
      title : "Galleri5 Affiliate app.",
      description : "Served 15,000 daily users and disbursed 1M rupees monthly by initiating, developing, and maintaining Galleri5’s affiliate app using FastAPI and ReactJS, while managing a team of junior developers to accelerate development.",
      content : "Skills : Python, ReactJS, FastAPI, GCP, MongoDB, Transaction management."
     },
     {
      href : "https://creators.galleri5.com/",
      title : "Galleri5 Creator app.",
      description : "Enhanced functionalities for 10,000+ influencers by contributing to the ongoing development of the Creators app, optimizing its features as one of Galleri5’s key products.",
      content : "Skills : Python, ReactJS, FastAPI, AWS, MongoDB."
     },
     {
      href : "https://brands.galleri5.com/",
      title : "Galleri5 Brands app.",
      description : "Improved brand interactions for 100+ brands by adding new features and optimizing Galleri5's BrandsApp, contributing to a five-year operational success.",
      content : "Skills : Python, ReactJS, FlaskAPI, AWS, GCP, MongoDB."
     },
     {
      href : null,
      title : "Generative AI.",
      description : "Achieved 87% accuracy and <30s execution time by collaborating with the CTO to develop the initial version of generative AI stable diffusion XL LoRa, setting a stable foundation for future enhancements.",
      content : "Skills : Python, ML, AI, Generative AI, Image Generation, Prompt Engineering."
     },
     {
      href : null,
      title : "Database Optimization and Management.",
      description : "Reduced storage costs by $65/month and improved latency from 5 to 2 seconds by migrating data to Google Cloud and developing a custom library for efficient access.",
      content : "Skills : DBMS, Cloud storage, Optimization."
     },
     {
      href : "https://github.com/Sabhari-CEG/Custom-browser-tab-implementation",
      title : "Custom Browser Implementation.",
      description : "Developed a custom browser with optimized keyboard shortcuts using HTML, CSS, JavaScript, JQuery, and IFrames for loading websites.",
      content : "Skills : HTML, CSS, Javascrip, JQuery, IFrames."
     },
     {
      href : null,
      title : "Galleri5 admin app.",
      description : "Developed Galleri5's one-stop admin app, automating over 60% of manual tasks by providing key metrics, data analysis on trajectory, trends, and growth projections, while offering intuitive admin control for admin users across all products.",
      content : "Skills : Python, Flask, ReactJS, Data Analysis, Access control, cyber security."
     },
  
  ]



const Galleri5Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the component is in view
    triggerOnce: true // Trigger only once
});


  return (
    <div ref={ref} className='outer-box'>
      
    <h2 style={{color: "#fac912"}} className='Primary'>Galleri5 Projects</h2>
    <List
    itemLayout="vertical"
    size="large"
    
    pagination={{
      onChange: (page) => {
        console.log('Page: ', page);
      },
      pageSize: 15,  // Display 10 items per page
    }}
    dataSource={galleri5Projects}
    
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
  

export default Galleri5Projects;
