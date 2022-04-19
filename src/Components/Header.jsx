import React from 'react';

export default function Header() {
   
  return (
        <div className="header">
                 <form>
                          <input checked type="radio" name='radio' className='radio' required />
                          <label htmlFor="formselection"> Form Selection  &#8212;&#8212;&#8212;&#8212;</label>
                          <input type="radio"  name='radio' className='radio' required/>
                          <label htmlFor="setup">Set up  &#8212;&#8212;&#8212;&#8212;</label>
                          <input type="radio" name='radio' className='radio' required/>
                          <label htmlFor="formcreation">Form Creation  &#8212;&#8212;&#8212;&#8212;</label>
                          <input type="radio" name='radio' className='radio' required/>
                          <label htmlFor="review">Review</label>
                          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; <button id='cross-btn'>X</button>
                 </form>
        </div>
  )
}
