import React from 'react'

export default function DocumentCollection() {
  return (
       <div className="col">
           <form className='Form-Body'>
                <li><label htmlFor="marksheet">1. 10th Marksheet*</label><br />
                <input  className='input-box' type="text" placeholder='Attach file upto 5kb' /></li><br />
                <li><label htmlFor="marksheet">2. 12th Marksheet*</label><br />
                <input  className='input-box' type="text" placeholder='Attach file upto 5kb' /></li><br />
                <li><label htmlFor="gm">3. Graduation Marksheet</label><br />
                <input  className='input-box' type="text" placeholder='Attach file upto 5kb' /></li><br />
                <li><label htmlFor="pgm">4. Post Graduation Marksheet</label><br />
                <input  className='input-box' type="text" placeholder='Attach file upto 5kb' /></li><br />
                <li><label htmlFor="offerletter">5. Offer Letter*</label><br />
                <input  className='input-box' type="text" placeholder='Attach file upto 5kb' /></li><br />
                <li><label htmlFor="salaryslips">6. Salary Slips*</label><br />
                <input  className='input-box' type="text" placeholder='Attach file upto 5kb' /></li><br />
                <li><label htmlFor="bankstatement">7. Bank Statement*</label><br />
                <input  className='input-box' type="text" placeholder='Attach file upto 5kb' /></li><br />
                <li><label htmlFor="incletter">8. Increment Letter (if any)</label><br />
                <input  className='input-box' type="text" placeholder='Attach file upto 5kb' /></li><br />
                <li><label htmlFor="others">9. Others (if any)</label><br />
                <input className='input-box' type="text" placeholder='Attach file upto 5kb' /></li>
            </form>
        </div>
     

  )
}