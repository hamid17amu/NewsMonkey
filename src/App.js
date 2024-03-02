// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';


const App = () => {
  const pageSize=5;
  const apiKey=process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0)

  // setProgress=(prog)=>{
  //   // setState({progress: prog})
  // }

    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        height={4}
        progress={progress}
      />
        <Routes>
          <Route exact path="/" element={<News setProg={setProgress} api={apiKey} key="general" pageSize={pageSize} country='in' category='general'/>}/>
          <Route exact path="/Business" element={<News setProg={setProgress} api={apiKey} key="business" pageSize={pageSize} country='in' category='business'/>}/>
          <Route exact path="/Entertainment" element={<News setProg={setProgress} api={apiKey} key="entertainment" pageSize={pageSize} country='in' category='entertainment'/>}/>
          <Route exact path="/General" element={<News setProg={setProgress} api={apiKey} key="general" pageSize={pageSize} country='in' category='general'/>}/>
          <Route exact path="/Health" element={<News setProg={setProgress} api={apiKey} key="health" pageSize={pageSize} country='in' category='health'/>}/>
          <Route exact path="/Science" element={<News setProg={setProgress} api={apiKey} key="science" pageSize={pageSize} country='in' category='science'/>}/>
          <Route exact path="/Sports" element={<News setProg={setProgress} api={apiKey} key="sports" pageSize={pageSize} country='in' category='sports'/>}/>
          <Route exact path="/Technology" element={<News setProg={setProgress} api={apiKey} key="technology" pageSize={pageSize} country='in' category='technology'/>}/>

        </Routes>
        </Router>
      </div>
    )
  }

  export default App