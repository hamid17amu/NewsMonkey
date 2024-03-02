// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';


export default class App extends Component {
  pageSize=5;
  apiKey=process.env.REACT_APP_NEWS_API

  state={
    progress: 0
  }

  setProgress=(prog)=>{
    this.setState({progress: prog})
  }

  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        height={4}
        progress={this.state.progress}
      />
        <Routes>
          <Route exact path="/" element={<News setProg={this.setProgress} api={this.apiKey} key="general" pageSize={this.pageSize} country='in' category='general'/>}/>
          <Route exact path="/Business" element={<News setProg={this.setProgress} api={this.apiKey} key="business" pageSize={this.pageSize} country='in' category='business'/>}/>
          <Route exact path="/Entertainment" element={<News setProg={this.setProgress} api={this.apiKey} key="entertainment" pageSize={this.pageSize} country='in' category='entertainment'/>}/>
          <Route exact path="/General" element={<News setProg={this.setProgress} api={this.apiKey} key="general" pageSize={this.pageSize} country='in' category='general'/>}/>
          <Route exact path="/Health" element={<News setProg={this.setProgress} api={this.apiKey} key="health" pageSize={this.pageSize} country='in' category='health'/>}/>
          <Route exact path="/Science" element={<News setProg={this.setProgress} api={this.apiKey} key="science" pageSize={this.pageSize} country='in' category='science'/>}/>
          <Route exact path="/Sports" element={<News setProg={this.setProgress} api={this.apiKey} key="sports" pageSize={this.pageSize} country='in' category='sports'/>}/>
          <Route exact path="/Technology" element={<News setProg={this.setProgress} api={this.apiKey} key="technology" pageSize={this.pageSize} country='in' category='technology'/>}/>

        </Routes>
        </Router>
      </div>
    )
  }
}
