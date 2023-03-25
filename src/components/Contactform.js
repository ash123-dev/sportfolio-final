import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Contactform.css'

const Contactform = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [subject, setSubject] = useState("")

  const handlesubmit =async ()=> {

    await axios.post("http://localhost:8080/details/add",{
      name,
      email,
      message,
      subject
    })
    
    useEffect(() => {
    handlesubmit;
    }, [])
    
   
   
  }


  return (
    <div className='form'>
      <form>
        <label>Your Name</label>
        <input type='text' value={name} onChange={(event)=> setName(event.target.value)}></input>
        <label>Email</label>
        <input type='email' value={email} onChange={(event)=> setEmail(event.target.value)}></input>
        <label>Subject</label>
        <input type='text' value={subject} onChange={(event) => setSubject(event.target.value)}></input>
        <label>Message</label>
        <textarea rows='6' placeholder='Type your message here...' value={message} onChange={(event) => setMessage(event.target.value)} />
        <button className='btn' onClick={handlesubmit}>Submit</button>
      </form>

    </div>
  )
}

export default Contactform