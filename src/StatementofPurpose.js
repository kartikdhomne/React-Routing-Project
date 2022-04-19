import React,{useEffect} from 'react';

export default function StatementofPurpose({setNext}) {

    useEffect (()=>{
        setNext("/InterviewAvailability")
     },[])

  return (
      <div className="col">
          <form className='Form-Body'>
              <li><label htmlFor="description">1. Tell me about a time you were asked to do something you had never <br />done before. How did you react? What did you learn?</label><br /><br />
              <input type="text" className='input-box' placeholder='Enter a description for the long answer' /></li><br />
              <li><label htmlFor="description">2. Tell me about the last time something significant didn’t go according <br />to plan at work. What was your role? What was the outcome?</label><br /><br />
              <input type="text" className='input-box' placeholder='Enter a description for the long answer' /></li><br />
              <li><label htmlFor="description">3.  What are the three things that are most important to you in a job?</label><br /><br />
              <input type="text" className='input-box' placeholder='Enter a description for the long answer' /></li>
          </form>
      </div>
  
  )
}