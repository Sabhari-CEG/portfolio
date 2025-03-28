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
     {
      href : "https://github.com/Sabhari-CEG/TikTok-Clone-A-Kotlin-Powered-Social-Media-Engine/tree/master",
      title : "TikTok Clone : A Kotlin Powered Social Media Engine",
      description : "Reverse-engineered TikTok's core features to deliver a smooth, efficient user experience through modern Android practices, advanced Kotlin programming, optimized media handling, and seamless content scrolling.",
      content : "Skills : Kotlin, Mobile App, Android, UI/UX."
     },
     {
      href : "https://github.com/Sabhari-CEG/Real-time-IoT-Sensor-Anomaly-Detection-using-Kafka-Streams-on-GKE-A-Cloud-Native-Implementation",
      title : "Real-time IoT Sensor Anomaly Detection using Kafka Streams on GKE (A Cloud Native Implementation)",
      description : "Deployed a cloud-native IoT anomaly detection system on GKE using Kafka clusters, processing 2.3M+ sensor readings with dual implementation approach (traditional, KSQL stream processing), achieving 25x performance optimization by reducing processing time from 6.3 hours to 10-15 mins.",
      content : "Skills : Kubernetes, Apache Kafka, KSQL, Google Cloud Platform, Shell Scripting."
     },
     {
      href : "https://github.com/Sabhari-CEG/Spring-boot-training",
      title : "SpringBoot Training",
      description : "Developed my first sample spring boot CRUD operations.",
      content : "Skills : JAVA, SpringBoot, REST APIs."
     },
     {
      href : "https://github.com/Sabhari-CEG/Angular-Training",
      title : "Angular Training",
      description : "Developed my first sample Angular project.",
      content : "Skills : Angular, TypeScript, JavaScript, HTML, CSS."
     },
     {
      href : "https://github.com/Sabhari-CEG/SecureTransfer-Modern-Full-Stack-Money-Transfer-Platform",
      title : "SecureTransfer-Modern Full-Stack Money Transfer Platform",
      description : "Engineered a full-stack money transfer platform that processed 100+ secure financial transactions, each under 50ms using Angular for frontend, Spring Boot for transaction processing, MySQL, and Docker for containerized deployment.",
      content : "Skills : Java, SpringBoot, REST APIs, Microservices, T-SQL, Object Oriented design, Angular, Typescript, HTML/CSS, Docker."
     },
     {
      href : "https://github.com/Sabhari-CEG/Performance-Analysis-Single-Node-vs-Hadoop-MapReduce-for-Time-Series-Data-Processing",
      title : "Performance Analysis - Single Node vs Hadoop MapReduce for Time Series Data Processing",
      description : "Evaluated distributed(1M+4W,1M+2W) vs. single-node processing on GCP(e2-standard-2 [2 CPU, 8GB memory]) for a 1.6M record datasett, finding single-node 37x faster (0.205s) and more memory-efficient (<100MB) for small datasets.",
      content : "Skills : Java, Hadoop, Distributed Computing, Performance Optimization, Google Cloud Platform, Data Analysis, Memory Management."
     },
     {
      href : "https://github.com/Sabhari-CEG/-Building-a-Stock-Analysis-System-with-Buy-Sell-Recommendations",
      title : "Building a Stock Analysis System with Buy/Sell Recommendations",
      description : " Designed and implemented a rule-based stock analysis system that processes financial data from 7 APIs, calculates growth rates for key metrics (e.g., revenue, EPS, free cash flow), and generates Buy/Sell recommendations with 99% accuracy during testing.",
      content : "Skills : Python, Financial Modeling Prep API, Pandas, Weighted Scoring Models."
     },
     {
      href : "https://github.com/Sabhari-CEG/Mendelian-Inheritance-Analysis-and-Trait-Prediction",
      title : "Mendelian Inheritance Analysis and Trait Prediction",
      description : "Developed a genomic analysis pipeline to verify parentage and predict traits using 601,802 SNPs. Achieved 99.09% confidence in parentage verification based on Mendelian inheritance rules.",
      content : "Skills : Python, Pandas, CSV processing, Genomics."
     },
     {
      href : "https://github.com/Sabhari-CEG/Real-Time-Bottleneck-Detection-and-Diagnostic-Insights-Platform",
      title : "Real-Time Logs Bottleneck Detection and Diagnostic Insights Platform",
      description : "Achieved real-time analysis of operational bottlenecks and diagnostic insights by processing 10M+ logs with 95% accuracy, reducing error identification time by 50% through Google Cloud Pub/Sub, Python-based processing, and socket API integration.",
      content : "Skills : Python, Cloud computing, Realtime Log analysis, Socket programming."
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
