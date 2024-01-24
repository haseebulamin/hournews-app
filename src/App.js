import Navbar from './Components/Navbar';
import './App.css';
import React, {useState } from 'react'
import News from './Components/News';
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
const App = ()=> {
  
   const pageSize = 6;
  const apikey =  process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0);
  
    return (
     <div>
      <Router>
      <LoadingBar
        height={4}
        color='#f11946'
        progress={progress}
      />
        <Navbar />
        <Routes>
        <Route exact  path='/' element={<News setProgress={setProgress} apikey={apikey}  key="/" pageSize={pageSize} country="us" />} />
        <Route exact  path='/business' element={<News setProgress={setProgress} apikey={apikey}  key="business" pageSize={pageSize} country="us" category="business"/>} />
        <Route exact  path='/entertainment' element={<News setProgress={setProgress} apikey={apikey}  key="entertainment" pageSize={pageSize} country="us" category="entertainment"/>} />
        <Route exact  path='/health' element={<News setProgress={setProgress} apikey={apikey}  key="health" pageSize={pageSize} country="us" category="health"/>} />
        <Route exact  path='/science' element={<News setProgress={setProgress} apikey={apikey}  key="Science" pageSize={pageSize} country="us" category="Science"/>} />
        <Route exact  path='/sports' element={<News setProgress={setProgress} apikey={apikey}  key="sports" pageSize={pageSize} country="us" category="sports"/>} />
        <Route exact  path='/technology' element={<News setProgress={setProgress} apikey={apikey}  key="technology" pageSize={pageSize} country="us" category="technology"/>} />
        </Routes>
      </Router>
      </div>
    )
  
}

export default App;