import React from 'react';
import './SideBar.css'
import { Link} from 'react-router-dom'

export default function SideBar () {
  return (
    
    <div className='sidebar'>
        <ul>

            <li className='list'><Link to="/" ><button className='btn'>  <div className='box'></div><h3>New Form</h3> 
            Start creating a new form with the wide options of fields available</button> </Link>
            </li>

             <p>Explore the following Templates:</p>

            <li className='list'><Link to="/DetailsCollection" > <button className='btn'> <div className='box'></div><h3>Details Collection </h3>
            Collect information from Candidates on their education, 
            work experience,contact no,etc </button></Link>
            </li>

            <li className='list'> <Link to="/DocumentCollection " ><button className='btn'><div className='box'></div><h3>Documents Collection</h3>
            Save time and efforts: Explore this template to 
            find a set of questions required for document collection </button> </Link>
            </li>
            
            <li className='list'> <Link to="/StatementofPurpose" ><button className='btn'><div className='box'></div><h3>Statement of Purpose</h3>
            Start creating a new form with the wide options of fields available</button> </Link></li>


            <li className='list'><Link to="/InterviewAvailability" ><button className='btn'><div className='box'></div><h3>Interview Availability</h3>
            Start creating a new form with the wide options of fields available</button></Link>
            </li>
    
        </ul> 
    </div>

  );
}
   