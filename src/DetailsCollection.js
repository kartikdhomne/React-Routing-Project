import React from 'react';

export default function DetailsCollection() {
  return (

     <div className="col">
        <form className="Form-Body">
            <li><label htmlFor="name">1. Name*</label><br />
            <input className='input-box' type="text" placeholder='Enter a Valid Salary in numbers e.g 50,000/-' /></li><br />
            <li><label htmlFor="email">2. Email*</label><br />
            <input className='input-box' type="email" placeholder='Example - userid@gmail.com' /></li><br />
            <li><label htmlFor="dateofbirth">3. Date of Birth</label><br />
            <input className='input-box' type="date" placeholder='DD/MM/YY' /></li><br />
            <li><label htmlFor="name">4. Contact no</label><br />
            <input className='input-box' type="number" placeholder='Enter your 10 digit contact number' /></li>
         </form>
      </div>
    
      
     )
}