import React, { useState } from 'react'
import './App.css'

const App = () => {
  
  const [about,setAbout] = useState({name:"John doe",email:"johndoe@gmail.com",phoneno:"+1 880-068-8629"});
  const [education,setEducation] = useState({school:"mit",title:"bs",date:"2028"});
  const [experience,setExperience] = useState({company:"google",position:"sde intern",resposibilities:"developed flutter",from:"2024",until:"2025"});

  return (
    <div className='mainContainer'>
      <Forms about={about} setAbout={setAbout} education={education} setEducation={setEducation} experience={experience} setExperience={setExperience} />
      <Resume resume={[about,education,experience]}/>
    </div>
  )
}

function Forms(props) {
  return (
    <div className='formContainer'>
      <About data={props.about} setData={props.setAbout}/>
      <Education data={props.education} setData={props.setEducation}/>
      <Experience data={props.experience} setData={props.setExperience}/>
    </div>
  )
}

function Resume(props) {
  return (
    <div className='resume'>
      <Title name={props.resume[0].name}/>
      <Contact contact={props.resume[0]}/>
      <hr style={{ borderColor: '#6e738d', borderWidth: '1px', margin: '2px 0' }}/>
      <Ed education={props.resume[1]}/>
      <hr style={{ borderColor: '#6e738d', borderWidth: '1px', margin: '2px 0' }}/>
      <Ex experience={props.resume[2]}/>
    </div>
  )
}

function Contact(props) {
  return (
  <div className='contactContainer'>
    <p>{props.contact.email}</p>
    <p>{props.contact.phoneno}</p>
  </div>
  )
}

function Ed(props) {
  return (
    <div className='educationContainer'>
      <p className='schoolName'>Graduated from: {props.education.school}</p>
      <p>{props.education.date}</p>
      <p>In {props.education.title}</p>
    </div>
  )
}

function Ex(props) {
  return (
    <div className='experienceContainer'>
      <p className='exTitle'>Worked at: {props.experience.company}</p>
      <p>as {props.experience.position}</p>
      <p>from: {props.experience.from} to: {props.experience.until}</p>
      <p className='schoolName'>Resposibilities</p>
      <ul><li>{props.experience.resposibilities}</li></ul>
    </div>
  )
}

function Title(props) {
  return <p className='titleName'>{props.name}</p>
}

function About(props) {
  const handleChange = (e) => {
    const { name, value } = e.target;

    props.setData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className='aboutForm'>
      <p className='formTitle'>About</p>
      <Input
        title="Name"
        name="name"
        value={props.data.name}
        onChange={handleChange}
      />
      <Input
        title="Email"
        name="email"
        value={props.data.email}
        onChange={handleChange}
      />
      <Input
        title="Phone Number"
        name="phoneno"
        value={props.data.phoneno}
        onChange={handleChange}
      />
    </div>
  );
}



function Education(props) {
  const handleChange = (e) => {
    const { name, value } = e.target;

    props.setData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  return (
    <div className='educationForm'>
      <p className='formTitle'>Education</p>
      <Input title="School" name="school" value={props.data.school} onChange={handleChange}/>
      <Input title="Title of study" name="title" value={props.data.title} onChange={handleChange}/>
      <Input title="Date of study" name="date" value={props.data.date} onChange={handleChange}/>
    </div>
  )
}

function Experience(props) {
  const handleChange = (e) => {
    const { name, value } = e.target;

    props.setData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  return (
    <div className='experienceForm'>
      <p className='formTitle'>Experience</p>
      <Input title="Company name" name="company" value={props.data.company} onChange={handleChange}/>
      <Input title="Position" name="position" value={props.data.position} onChange={handleChange}/>
      <Input title="Responsibilities" name="responsibilities" value={props.data.responsibilities} onChange={handleChange}/>
      <Input title="Date from" name="from" value={props.data.from} onChange={handleChange}/>
      <Input title="Date until" name="until" value={props.data.until} onChange={handleChange}/>
    </div>
  )
}

function SubmitButton() {
  return <button className='submitButton'>Submit</button>
}

function Input({ title, name, value, onChange }) {
  return (
    <div className='formInput'>
      <p>{title}: </p>
      <input
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
export default App