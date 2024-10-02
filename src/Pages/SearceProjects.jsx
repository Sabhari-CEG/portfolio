import React from 'react';
import { List } from 'antd';
import './projects.css'
import { useInView } from 'react-intersection-observer';
import { GithubOutlined } from '@ant-design/icons';



const searceProjects = [
    {
      href : "https://github.com/Sabhari-CEG/Flutter_Events_Unnamed-Geeks",
      title : "Flutter Hackathon (among colleague and seniors).",
      description : "Secured 2nd place in a Flutter hackathon among 12 teams by developing an app enabling users to share information via QR code.",
      content : "Skills : Flutter, Mobile App Development."
     },
     {
      href : "https://github.com/Sabhari-CEG/product_catalog_ecommerce_backend",
      title : "E-commerce backend POC in Go Lang.",
      description : "Improved e-commerce operations by developing a Go Lang backend with concurrent processing, handling product listings, inventory, and user authentication, and utilizing Go channels for efficient order processing and shipping.",
      content : "Skills : Go Lang, REST API, API Development,PostgreSQL."
     },
     {
      href : null,
      title : "GCP Buckets wrapper library.",
      description : "Reduced GCP billing costs by 30% by developing a wrapper library for GCP’s bucket component, making it compatible with legacy code and implementing lifecycle management.",
      content : "Skills : Python, GCP Bucket, IAM."
     },
     {
      href : null,
      title : "Truck Traffic Management app.",
      description : "Reduced truck turnaround time by 43% by developing a traffic management app integrating Google Maps API to predict and display optimal routes for trucks.",
      content : "Skills : Javascript, ReactJS, API, NodeJS, Machine Learning."
     },
     {
      href : "https://github.com/GoogleCloudPlatform/spanner-migration-tool/pull/552",
      title : "Open Source Contribution to Google's Harbourbridge.",
      description : "Increased test coverage from 53.7% to 60.2% by adding unit test cases to various packages and streamlining the codebase by removing unused functions in internal/helper.go.",
      content : "Skills : Go Lang, Testing."
     },
     {
      href : "https://github.com/Sabhari-CEG/-MERN-stack",
      title : "Bill collecting app (MERN Stack + instamojo payment gateway).",
      description : "Built a bill payment system with Instamojo by developing a MERN stack app where users could pay via credit/debit card or net banking, utilizing webhooks to update payment status.",
      content : "Skills : MERN, MongoDB, ExpressJS, ReactJS, NodeJS, Payment Gateway Integration, webhooks."
     }
  ]



const SearceProjects = () => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the component is in view
    triggerOnce: true // Trigger only once
});


  return (
    <div ref={ref} className='outer-box'>
      
    <h2 style={{color: "#fac912"}} className='Primary'>Searce Projects</h2>
    <List
    itemLayout="vertical"
    size="large"
    
    pagination={{
      onChange: (page) => {
        console.log('Page: ', page);
      },
      pageSize: 15,  // Display 10 items per page
    }}
    dataSource={searceProjects}
    
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
  

export default SearceProjects;
