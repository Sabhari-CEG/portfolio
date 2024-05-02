import React from 'react';
import { List } from 'antd';
import './projects.css'
import { useInView } from 'react-intersection-observer';
import { GithubOutlined } from '@ant-design/icons';



const galleri5Projects = [
    {
      href : "https://affiliate.galleri5.com/",
      title : "Galleri5 Affiliate app.",
      description : "Initiated, developed, and maintained Galleri5's affiliate app using FastAPI and ReactJS. As one of the three main products at Galleri5, it serves approximately 15,000 daily users and disburses about 1 million rupees monthly. To accelerate development, I also managed a team of junior developers.",
      content : "Skills : Python, ReactJS, FastAPI, GCP, MongoDB, Transaction management."
     },
     {
      href : "https://creators.galleri5.com/",
      title : "Galleri5 Creator app.",
      description : "Contributed to the ongoing development of the Creators app, an existing platform for the past three years, by modifying, adding, and optimizing its functionalities. As the second of three main products, it is utilized by approximately 10,000+ influencers.",
      content : "Skills : Python, ReactJS, FastAPI, AWS, MongoDB."
     },
     {
      href : "https://brands.galleri5.com/",
      title : "Galleri5 Brands app.",
      description : "contributed to enhancing and optimizing BrandsApp, a key product that has been operational for five years. My role involved adding new features to this app, which supports and manages interactions with over 100 brands.",
      content : "Skills : Python, ReactJS, FlaskAPI, AWS, GCP, MongoDB."
     },
     {
      href : null,
      title : "Generative AI.",
      description : "Collaborated with the CTO to develop an initial version of the generative AI stable diffusion XL LoRa, establishing a stable base for future enhancements and innovations. Achieved 87% accuracy and execution time below 30s.",
      content : "Skills : Python, ML, AI, Generative AI, Image Generation, Prompt Engineering."
     },
     {
      href : null,
      title : "Database Optimization and Management.",
      description : "Resolved the company’s storage problem by migrating the data to Google Cloud and creating a custom library for efficient data access. Thus reducing the company’s monthly storage cost by $65 and improving average latency from 5 to 2 seconds.",
      content : "Skills : DBMS, Cloud storage, Optimization."
     },
     {
      href : "https://github.com/Sabhari-CEG/Custom-browser-tab-implementation",
      title : "Custom Browser Implementation.",
      description : "Developed a custom implementation of my own browser with HTML, CSS, Javascript, JQuery with customized keyboard short cuts. I had used IFrames to load the websites.",
      content : "Skills : HTML, CSS, Javascrip, JQuery, IFrames."
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
