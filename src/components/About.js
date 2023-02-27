import React,{Fragment,useState} from 'react'
import "../CSS/About.css"

const About = () => {
  const [ toggleTab, setToggleTab] = useState(1)
  const toggleState = (index) =>{
    setToggleTab(index)
  }
  return (
    <Fragment>
        

    <section className="about">

    <div className="row">

    <div className="column">
      <div className="about-img"></div>
    </div>

    <div className="column">

    <div className="tabs">

    <div className={toggleTab === 1 ? "single-tab active-tab": "single-tab"}
    onClick = {() => toggleState(1)}
    >
      <h2>About</h2>
    </div>

    <div className={toggleTab === 2 ? "single-tab active-tab": "single-tab"}
    onClick = {() => toggleState(2)}
    >
      <h2>Team</h2>
    </div>

    <div className={toggleTab === 3 ? "single-tab active-tab": "single-tab"}
    onClick = {() => toggleState(3)}
    >
      <h2>Future</h2>
    </div>
      
    </div>

    <div className="tab-content">

    {/* About Content */}

    <div className={toggleTab === 1 ?"content active-content":"content"}>
      <h2>What is PicShare</h2>
      <p>Picshare is an event driven photo app that allows you to share photos instantly and effortlessly with friends within a certain time frame (for example during a holiday, dinner, concert etc). You can share pictures with the people you select by simply using one button and Picshare instantly generates an album of your event</p>
       <h3>Background Story</h3>
       <p>We have designed this website so you can do all the stuffs like(Searching,editing,remove background) all in one Place</p>
    </div>

    {/* Skills Content */}

    <div className={toggleTab === 2 ?"content active-content":"content"}>
      <h2>Members</h2>
      <p>PicShare is developed by students of SKCT.The team of SlimSloths(Arul Edwin,AjithKumar,HarishKumar,Deepak Prabhu,Aswin and Harshavardhan) in 2022
        It have been developed by using the following languages...
      </p>

       <div className="skills-row">

       <div className="skills-column">
        <div className="progress-wrap">
          <h3>Javascript</h3>
          <div className="progress">
            <div className="progress-bar">
              <span>85%</span>
            </div>
          </div>
        </div>
       </div>

       <div className="skills-column">
        <div className="progress-wrap">
          <h3>CSS</h3>
          <div className="progress">
            <div className="progress-bar Designer">
              <span>25%</span>
            </div>
          </div>
        </div>
       </div>

       <div className="skills-column">
        <div className="progress-wrap">
          <h3>HTML</h3>
          <div className="progress">
            <div className="progress-bar Javascript">
              <span>10%</span>
            </div>
          </div>
        </div>
       </div>

       <div className="skills-column">
        <div className="progress-wrap">
          <h3>JSX</h3>
          <div className="progress">
            <div className="progress-bar PhotoShop">
              <span>5%</span>
            </div>
          </div>
        </div>
       </div>

       </div>

    </div>

       {/* Experience Content */}

    <div className={toggleTab === 3 ?"content active-content":"content"}>

    <div className="exp-column">
      <h3>Background Remover</h3>
      <span>2023</span>
      <p>We have been working on background image remover which will help you editing various iamges</p>
    </div>

    <div className="exp-column">
      <h3>Profile Dashboard</h3>
      <span>2023</span>
      <p>Profile Dashboard helps you to the user to actually upload and make money on your own images</p>
    </div>

    <div className="exp-column">
      <h3>Quality Increaser</h3>
      <span>2023</span>
      <p>It helps to increase the quality of your images</p>
    </div>
    
    </div>
        
    </div>

    </div>

    </div>

    </section>
    
    </Fragment>
  )
}

export default About