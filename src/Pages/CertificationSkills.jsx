import "./Skills.css"
import { useInView } from 'react-intersection-observer';
import gcp from "../images/gcp.png"
import educative from "../images/educative.png"
import umich from "../images/umich.png"
import simplilearn from "../images/simplilearn.jpeg"
import ms from "../images/microsoft.jpg"
import { Card, Button } from 'antd';
import { CalendarOutlined, LinkOutlined, HomeOutlined, LaptopOutlined } from '@ant-design/icons';



const CertificationSkills = () => {
    const { ref, inView } = useInView({
        threshold: 0.1, // Trigger when 10% of the component is in view
        triggerOnce: true // Trigger only once
    });
    
    const certificates = [
        {
            thumb : gcp,
            name : "Professional Cloud Database Engineer",
            organization : "Organization : Google cloud",
            platform : "Platform : Google Cloud Learning",
            date : "Date : Mar 2023",
            description : "The Professional Cloud Database Engineer designs, creates, manages, and troubleshoots Google Cloud databases used by applications to store and retrieve data.",
            certificate : "https://www.credential.net/4b06c364-b5fe-463e-88c9-e721d9f47637?key=dd780fbc49b717e1464a3352e731cd407700274971aaaf30c608231ad33a7bf4",
        },
        {
            thumb : gcp,
            name : "Professional Cloud Developer",
            organization : "Organization : Google cloud",
            platform : "Platform : Google Cloud Learning",
            date : "Date : Mar 2023",
            description : "A Professional Cloud Developer builds scalable and highly available applications using Google-recommended tools and best practices.",
            certificate : "https://www.credential.net/23197db4-148c-4616-9958-6d4119502084?key=93ebd85f576abcac34af86cc12768c24d08f53a7ed0b1b9025ee57d841911126",
        },
        {
            thumb : gcp,
            name : "Professional Cloud Architect",
            organization : "Organization : Google cloud",
            platform : "Platform : Google Cloud Learning",
            date : "Date : Feb 2023",
            description : "A Google Cloud Certified - Professional Cloud Architect enables organizations to leverage Google Cloud technologies.",
            certificate : "https://www.credential.net/968a0298-722f-43ad-ae63-4789822da3d5?key=e96a78621f0a6ac47772ec73be59b0577c483229045f6786014f755ab1848c74",
        },
        {
            thumb : educative,
            name : "Database Design Fundamentals for Software Engineers",
            organization : "Organization : Educative",
            platform : "Platform : Educative Learning",
            date : "Date : Dec 2022",
            description : "Learned about the fundamental concepts of databases, why and when they're used, what relational databases are, and entity-relationship diagrams.",
            certificate : "https://www.educative.io/verify-certificate/8q5Jgjuz9rQx46wlZH9n6Nx6E3PKTg",
        },
        {
            thumb : gcp,
            name : "Associate Cloud Engineer",
            organization : "Organization : Google cloud",
            platform : "Platform : Google Cloud Learning",
            date : "Date : Dec 2022",
            description : "An Associate Cloud Engineer deploys applications, monitors operations, and manages enterprise solutions.",
            certificate : "https://www.credential.net/95c27621-2699-4ad6-893c-32cc659dc03f",
        },
        {
            thumb : umich,
            name : "Using Python to Access Web Data",
            organization : "Organization : University of Michigan",
            platform : "Platform : Coursera",
            date : "Date : Dec 2020",
            description : "This course taught me how to treat the Internet as a source of data. I had scraped, parsed, and read web data as well as access data using web APIs. I also worked with HTML, XML, and JSON data formats in Python.",
            certificate : "https://www.coursera.org/account/accomplishments/certificate/4BVYM943GHPT",
        },
        {
            thumb : umich,
            name : "Building Web Application in PHP",
            organization : "Organization : University of Michigan",
            platform : "Platform : Coursera",
            date : "Date : Apr 2020",
            description : "Through this course, I learned about the fundamentals of web applications, delving into HTML, PHP, and CSS. I explored how browsers interact with servers, mastered the basics of PHP, including error handling and superglobals, and applied CSS to style webpages. Additionally, I became proficient in setting up integrated PHP/MySQL environments like XAMPP or MAMP, enriching my web development skills.",
            certificate : "https://www.coursera.org/account/accomplishments/certificate/WJ8X2KXTQTST",
        },
        {
            thumb : umich,
            name : "Introduction to Structured Query Language (SQL)",
            organization : "Organization : University of Michigan",
            platform : "Platform : Coursera",
            date : "Date : Apr 2020",
            description : "I had learnt about single table queries and the basic syntax of the SQL language, as well as database design with multiple tables, foreign keys, and the JOIN operation. Lastly, I had taught to model many-to-many relationships like those needed to represent users, roles, and courses.",
            certificate : "https://www.coursera.org/account/accomplishments/certificate/XK8VALMWKN5D",
        },
        {
            thumb : umich,
            name : "Python Data Structures",
            organization : "Organization : University of Michigan",
            platform : "Platform : Coursera",
            date : "Date : Apr 2020",
            description : "I had learnt use the Python built-in data structures such as lists, dictionaries, and tuples to perform increasingly complex data analysis.",
            certificate : "https://www.coursera.org/account/accomplishments/certificate/28R6QJKKPWF2",
        },
        {
            thumb : umich,
            name : "Programming for Everybody (Getting started with python)",
            organization : "Organization : University of Michigan",
            platform : "Platform : Coursera",
            date : "Date : Apr 2020",
            description : "I had gained a foundational understanding of a subject or tool. Developed a job-relevant skills with hands-on projects.",
            certificate : "https://www.coursera.org/account/accomplishments/certificate/82N9EKPZRB94",
        },
        {
            thumb : simplilearn,
            name : "Getting Started with NodeJS",
            organization : "Organization : Simplilearn | Skillup",
            platform : "Platform : Simplilearn",
            date : "Date : Apr 2024",
            description : "I had learnt basics of NodeJS and create api in ExpressJS. Developed multi-routes, auth enabled, MongoDB powered APIs using ExpressJS",
            certificate : "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxNzQ2IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvdGh1bWJfNTA1NzA2M18xNzEzNDM3NzQ5LnBuZyIsInVzZXJuYW1lIjoiU2FiaGFyaSBQIn0%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F4236%2FGetting-started-with-NodeJS%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1313121547613282697&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVN8s3Tfct8owo904CAOIsZ3wlAAAA",
        },
        {
            thumb : simplilearn,
            name : "Become a Data Science Expert with Python Django Tutorial",
            organization : "Organization : Simplilearn | Skillup",
            platform : "Platform : Simplilearn",
            date : "Date : Jun 2024",
            description : "I had learnt basics of Full stack development in Django with HTML, CSS and JS. Created some projects using Django.",
            certificate : "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIzMTMwIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvdGh1bWJfNjc0NjY3MV8xNzE4NzE5MTI3LnBuZyIsInVzZXJuYW1lIjoiU2FiaGFyaSBQIn0%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F5897%2FBecome-a-Data-Science-Expert-with-Python-Django-Tutorial%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1313121547613282697&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVN8hxCY8ILI4o904CAJ%2B9v0IlAAAA",
        },
        {
            thumb : ms,
            name : "Career Essentials in Generative AI by Microsoft and LinkedIn",
            organization : "Organization : Microsoft",
            platform : "Platform : Linkedin Learning",
            date : "Date : Jun 2024",
            description : "Mastered essential career skills in Generative AI through Microsoft and LinkedIn's Career Essentials program, gaining practical insights into cutting-edge AI technologies.",
            certificate : "https://www.linkedin.com/learning/certificates/fbd79dd3ee1a108908e536cc4383c39f6a7c3335690fc4ddb123b1739bf8f13c",
        }
    ]

    return (
        <div>
          <div className="workshop-container" ref={ref}>
      {certificates.map((certificate, index) => (
        <Card key={index} className="workshop-card">
          <div className="workshop-content">
            <img src={certificate.thumb} className="workshop-avatar" />
            <div className="workshop-details">
              <h3>{certificate.name}</h3>
              <p><HomeOutlined /> {certificate.organization}</p>
              <p><LaptopOutlined />{certificate.platform}</p>
              <p><CalendarOutlined /> {certificate.date}</p>
              <p>{certificate.description}</p>
              {certificate.certificate && (
                <Button type="link" icon={<LinkOutlined />} href={certificate.certificate} target="_blank" style={{color : "#fac912", fontWeight: "bolder", fontSize: "1rem"}}>
                  Certificate
                </Button>
              )}
            </div>
          </div>
        </Card>
      ))}
    </div>
        </div>
    )
}

export default CertificationSkills;