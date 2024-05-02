import React from 'react';
import { List } from 'antd';
import './projects.css'
import { useInView } from 'react-intersection-observer';
import { GithubOutlined } from '@ant-design/icons';



const searceProjects = [
    {
      href : "https://github.com/Sabhari-CEG/Flutter_Events_Unnamed-Geeks",
      title : "Flutter Hackathon (among colleague and seniors).",
      description : "Participated in a Flutter hackathon focused on creating an app that enables users to share their information via QR code. Our team achieved second place among twelve teams of software developers.",
      content : "Skills : Flutter, Mobile App Development."
     },
     {
      href : "https://github.com/Sabhari-CEG/product_catalog_ecommerce_backend",
      title : "E-commerce backend POC in Go Lang.",
      description : "Developed the backend for a comprehensive e-commerce website covering product listings, inventory management, user authentication, order processing, and shipping using Go Lang. Through this project, I gained insights into REST API conventions and concurrent processing in Go Lang, utilizing Go channels for inter-process communication.",
      content : "Skills : Go Lang, REST API, API Development,PostgreSQL."
     },
     {
      href : null,
      title : "GCP Buckets wrapper library.",
      description : "Developed a wrapper library for GCP’s bucket component and made it suitable to adapt and work with existing legacy code and powered with GCP’s lifecycle management to reduce the billing cost by 30%.",
      content : "Skills : Python, GCP Bucket, IAM."
     },
     {
      href : null,
      title : "Truck Traffic Management app.",
      description : "Developed a traffic management application that detects truck movements and predicts traffic at each gate, integrating with the Google Maps API to display optimal routes and times. This system effectively reduced truck turnaround time (TAT) by 43%.",
      content : "Skills : Javascript, ReactJS, API, NodeJS, Machine Learning."
     },
     {
      href : "https://github.com/GoogleCloudPlatform/spanner-migration-tool/pull/552",
      title : "Open Source Contribution to Google's Harbourbridge.",
      description : "Under the supervision of Lazzi and Shelly, I increased the test coverage from 53.7% to 60.2% by adding unit test cases to the webv2, internal, sources, and profiles packages. The changes were confined to test-case files, with the exception of internal/helper.go, where I removed two unused functions, ComputeToSource and ComputeToSpanner, to streamline the codebase.",
      content : "Skills : Go Lang, Testing."
     },
     {
      href : "https://github.com/Sabhari-CEG/-MERN-stack",
      title : "Bill collecting app (MERN Stack + instamojo payment gateway).",
      description : "Built a learning project in MERN stack, where users can pay their bill payments using credit/debit card or net banking. I had used instamojo as the payment gateway and used webhooks to update the payment status.",
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
