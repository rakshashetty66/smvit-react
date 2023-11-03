
import React from 'react'
import './Resume.css';
import image from'../../images/rrrr.jpg'
// import pic from '../../images/pic.jpg'

function Resume() {
  return (
    <div className='resume-container'>
      <h1 className='b'>RESUME</h1>
      <hr />

      <h1 className='s'>Raksha Shetty</h1>
      <h5 className='r' >web developer</h5>
      <center><img src={image} className="image" alt=""/></center> 
      <form>
        <span>123-456-789</span>
        <br />
        <span>abc.gmail.com</span>
        <br />
        <span>Github:</span>
        <a href="https://github.com/raksha-r" target="_blank">click here</a>
      </form>
      <hr/>

      <h3>PROFILE</h3>
      <div className='bio'>Iam a web developer , currently a fresher , studying in Shri Madhwa Vadiraja Institute Of Technology and Managemnet . Have a strong creative and analytic skill.
        Team player with an eye for detail .
      </div>
      <h3 >EDUCATION</h3>
      <h5>HIGH SCHOOL</h5>
      <span>Poorna Prajna High school Admar</span>
      <h5>PRE UNIVERSITY</h5>
      <span>Poorna prajna pre university college Admar</span>
    <h3 >SKILLS</h3>
    <ul>
      <li>Web developer</li>
      <li>Design Thinking</li>
      <li>Strong communication</li>
      <li>problem-solving</li>

      </ul>
      <h3>CERTIFICATION</h3>
      <ul>
        <li>Hackathon</li>
        <li>Aurdino</li>
        <li>C++</li>
        <li>Mini project</li>
        <li>Cyber Security</li>
      </ul>
	    </div>  
  )
}

export default Resume


