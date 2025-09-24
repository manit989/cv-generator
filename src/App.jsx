import React from 'react'
import './App.css'

const App = () => {
  return (
    <div className='mainContainer'>
      <Form />
      <Resume />
    </div>
  )
}

function Form() {
  return (
    <div className='formContainer'>
      <About />
      <Experience />
    </div>
  )
}

function Resume() {
  return (
    <div className='resume'></div>
  )
}

function About() {
  return (
    <div className='aboutForm'></div>
  )
}

function Experience() {
  return (
    <div className='experienceForm'></div>
  )
}
export default App