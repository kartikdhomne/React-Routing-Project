
import './App.css';
import SideBar from './SideBar/SideBar';
import DetailsCollection from './DetailsCollection';
import DocumentCollection from './DocumentCollection';
import StatementofPurpose from './StatementofPurpose';
import InterviewAvailability from './InterviewAvailability'
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
          <div className="demo">
              <BrowserRouter>
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
                          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; <button>X</button>
                     </form>
                  </div>

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
                            <Route path="/" element={ <DetailsCollection/>} />
                            <Route path="/DetailsCollection" element={ <DetailsCollection/>} />
                            <Route path="/DocumentCollection" element={ <DocumentCollection/>} />
                            <Route path="/InterviewAvailability" element={ <InterviewAvailability/>} />
                            <Route path="/StatementofPurpose" element={ <StatementofPurpose/>} />
                        </Routes>
                    </div>
              </BrowserRouter>
    </div>
    </div>
   
  );
}

export default App;
