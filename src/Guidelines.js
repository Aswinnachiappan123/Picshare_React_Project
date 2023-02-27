import React from 'react'
import './Guidlines.css'
import {useNavigate,Link } from 'react-router-dom'
function Guidelines() {
  const hi=useNavigate();
  return (
    <div className="Guide">
      <div className="Head">
        <h1>GuideLines </h1>
        <h2>1.Picshare is an event driven photo app that allows you to share photos instantly and effortlessly with friends within a certain time frame (for example during a holiday, dinner, concert etc). You can share pictures with the people you select by simply using one button and Picshare instantly generates an album of your event.</h2>
        <h3>2.Through PicShare you can Search and Find Millions of Images  for Free</h3>
        <h4>3.Creating an Account Gives you more features in PicShare</h4>
        <h5>4.You can Create an Account through Signup page Once you Created an Account  you can Login through your account and </h5>
        <h6>5.Through home page you can find any images by just searching it and If you want any further help you can contact us through e-mail which is provided in contact us page </h6> 
      </div>
      <div className="Contact">
      <button onClick={()=>{hi('contact');
            }}>
              Contact</button>
      </div>

    </div>
  )
}

export default Guidelines
