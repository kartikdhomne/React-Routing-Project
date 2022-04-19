import React,{useEffect} from 'react';

export default function InterviewAvailability({setNext}) {
      
  useEffect (()=>{
    setNext("/DetailsCollection")
 },[])

  return (

   <div className="col">
            <form className='Form-Body'>
              <li><label htmlFor="description">1. Email*</label><br />
              <input  className='input-box' type="email" placeholder='Example - userid@gmail.com' /></li><br />
              <li><label htmlFor="description">2. Location</label><br />
              <input className='input-box' type="text" placeholder='Search or enter your location ' /></li><br />
              <li><label htmlFor="description">3. Interview Date</label><br />
              <input className='input-box' type="date" placeholder='DD/MM/YY' /></li><br />
              <li><label htmlFor="description">4. Interview Time</label><br />
              <input className='input-box' type="time" placeholder='12:00' /></li><br />
              <li><label htmlFor="description">5. Time Zone</label><br />
              <input className='input-box' type="timezone" placeholder='Search or Select a time zone from below ' /></li><br />
              <li><label htmlFor="description">6. Interview Medium</label><br />
              <input className='input-box' type="text" placeholder='Search or Select medium of Interview from below' /></li>
        </form>
    </div>
     

  )
}