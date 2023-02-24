import React from 'react'
import "./home.css"
import { SiGmail } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import Navbar from '../components/Navbar';
import { AuthConsumer } from '../components/Auth';



export default function Home() {
  const value = AuthConsumer();
  return (
    <main>
      <div className="opening">
        <Navbar value={value}/>
        <h2>
          Welcome, {value.username.toUpperCase()}.
        </h2>
        <h1>I am Loknath</h1>
        <p>A motivated individual who is good at problem-solving and programming, with an emphasis on writing clean and maintainable code. <br /> Experienced with data structures/algorithms and designing optimal solutions....</p>
        <div className="redirect-btn">
          <button className='app_btn'>View work</button>
          <button className='app_btn'>Hire me!</button>
          <a className='app_btn resume' href="https://drive.google.com/file/d/1bIe8DU3yyyB8PE8hzBEiHnlyVrDGExUw/view?usp=sharing" rel="noreferrer" target="_blank">Resume</a>
        </div>
      </div>

      <div className="about" id='about'>
        <h1 className='heading'>About</h1>
        <p>
          My name is Chaitanya Gupta, I am a Full Stack Web Developer and Web Designer. An Open Source enthusiast and a Computer Science student from India.

          I love working on new and exciting technologies emerging nowadays. I have good work real world experience as a MERN Stack Developer in bootcamp with 10x academy  where I learned MERN  technologies and data structures and algorithms.
          <br /><br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nam vitae atque dolorum molestiae ipsa quaerat, maiores ea doloribus voluptate hic nesciunt, quas minima reprehenderit quo saepe quam, ipsum eos.
        </p>
      </div>


      <div className="skill">
        <h1 className='heading'>Skill</h1>
        <div className="box">

          <div className="skill-box">
            <h3 className='skill_heading'>Web Design</h3>
            <p>I love designs and it's the first step before creating any website as I can give layout to my imagination.</p>
          </div>
          <div className="skill-box">
            <h3 className='skill_heading'>Web Development</h3>
            <p>I am a Full Stack Web Developer (MERN) and have quite some experience in it as well.</p>
          </div>
          <div className="skill-box">
            <h3 className='skill_heading'>Problem Solving</h3>
            <p>I love solving problems whether programming problems or real life problems.</p>
          </div>
        </div>

        <div className="tech">
          <h2>TECH I'M FAMILIAR WITH</h2>
          <div className='tech_box'>
            <h4>Html5</h4>
            <h4>Javascript</h4>
            <h4>React.js</h4>
            <h4>Node.js</h4>
            <h4>Express.js</h4>
            <h4>mongoDB</h4>
            <h4>Git</h4>
            <h4>Bootstrap</h4>
          </div>
        </div>
      </div>

      <div className="education">
        <h1 className='heading'>Education</h1>
        <div className="education-box">
          <h2 className='edHeading'>Full stack web development</h2>
          <p className='lgrey'>10x academy</p>
          <p className='lgrey'>6 months bootcamp tech:- MERN technologies and DSA </p>
          <h4 className='lgrey'>2022</h4>
        </div>
        <div className="education-box">
          <h2 className='edHeading'>B.Sc in Mathematics</h2>
          <p className='lgrey'>Rajdhani college, Bhubaneswar</p>
          <p className='lgrey'>Hons(Mathematics)</p>
          <h4 className='lgrey'>2018-2021</h4>
        </div>
        <div className="education-box">
          <h2 className='edHeading'>High School, Central Board of Secondary Education</h2>
          <p className='lgrey'>Kendriya Vidyalaya No.2 bhopal</p>
          <p className='lgrey'>Stream:- PCM</p>
          <h4 className='lgrey'>2017</h4>
        </div>
      </div>

      <div className="project">
        <div className="project-box">
          <h1 className='heading'>Project</h1>
          <div className="probox">
            <h3 className='edHeading'>Contact manager app</h3>
            <ul className='lgrey list'>
              <li>Technologies Used: JavaScript, ReactJS, NodeJS, MongoDB, HTML , CSS.</li>
              <li>GitHub link: <a href="https://github.com/loknathPradhan/contact-manager-app">https://github.com/loknathPradhan/contact-manager-app.</a> </li>
              <li>Created a contact manager application where users can save their contacts with all the relative
                information eg:- email, phone, company etc.
              </li>
              <li>Implemented Log in /Sign Up functionality and can save their past contacts.</li>
              <li>Designed a fully functional import a delete operation.</li>
              <li>Connected the frontend to the backend using axios to get and post the data.</li>
              <li>collaboration - Git, Slack.</li>
            </ul>
          </div>

          <div className="probox">
            <h3 className='edHeading'>Insta clone app</h3>
            <ul className='lgrey list'>
              <li>Technologies Used: JavaScript, ReactJS, NodeJS, MongoDB, HTML , CSS.</li>
              <li>GitHub link: <a href="https://github.com/loknathPradhan/instaclone">https://github.com/loknathPradhan/instaclone.</a> </li>
              <li>Build a photo posting application where user can post a photo.</li>
              <li>Implemented frontend routes using react-router.</li>
              <li>Ensured that the UO conforms to the design provided as parts of the requirements.</li>
              <li>Build the backend using Node JS to serve the APIs.</li>
              <li>Connected the frontend to the backend using axios to get and post the data.</li>
            </ul>
          </div>

        </div>
      </div>

      <div className="contact" id='contact'>
        {/* <h1 className='heading cnt'>Contact </h1> */}
        <div className="cLink">
          <a href="mailto:loknath11a@gmail.com" target="_blank" rel="noreferrer"><SiGmail /></a>
          <a href="https://github.com/loknathPradhan" target="_blank" rel="noreferrer"><BsGithub /></a>
          <a href="https://www.linkedin.com/in/lokanthpradhan/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        </div>
      </div>
    </main>
  )
}
