
import './App.css';
import SideBar from './Components/SideBar/SideBar';
import DetailsCollection from './DetailsCollection';
import DocumentCollection from './DocumentCollection';
import StatementofPurpose from './StatementofPurpose';
import InterviewAvailability from './InterviewAvailability'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import { useState } from 'react';
import Header from './Components/Header';


function App() {

    const [next , setNext]= useState("/");
    
  return (
    <div className="App">

          <div className="demo">

               <BrowserRouter>
                 
                      <Header/>
                      <SideBar/>

                  <div className="Heading">

                      <div className="sub-heading">
                          <h3>Preview</h3>
                          <p>You will be able to customize the fields in the later stage</p>
                      </div>

                      <div className='main-container'>
                          <h3>Name of the Enquiry Form </h3>
                          <p>One line description of the form </p>
                          <p>Provide the following information to process your application</p>
                      </div>
              
                        <Routes>
                        
                            <Route path="/" element={ <DetailsCollection setNext={setNext} />} />
                            <Route path="/DetailsCollection" element={ <DetailsCollection setNext={setNext} />}/>
                            <Route path="/DocumentCollection" element={ <DocumentCollection setNext={setNext} />} />
                            <Route path="/InterviewAvailability" element={ <InterviewAvailability setNext={setNext} />} />
                            <Route path="/StatementofPurpose" element={ <StatementofPurpose setNext={setNext} />} />
                            
                        </Routes>

                    </div>

                         <div className='footer'><Link to={next} ><button className='next-button'>NEXT</button></Link></div>
                   
              </BrowserRouter>
             
          </div>
    </div>
   
  );
}

export default App;
