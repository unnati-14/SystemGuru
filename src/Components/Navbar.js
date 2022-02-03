import React, { Fragment } from 'react'; 
import '../Style/Navbar.css' 
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom';
import Concept from '../Components/Concept'

export default function Navbar() {
  return (
    <Fragment>
      <nav className="nav nav-pills flex-column flex-sm-row" >
          <a className="flex-sm-fill text-sm-center nav-link" href="#">SystemGuru</a>
          <a className="flex-sm-fill text-sm-center nav-link"> <Link to="/concept" style={{textDecoration:"none"}} target="_blank">System Design Concept</Link></a>
          <a className="flex-sm-fill text-sm-center nav-link active"><Link to="/" style={{textDecoration:"none",color:"white"}}>System Design Questions</Link></a>
    </nav>
      <div className='container'>
      <ul className="list-group">
        <a className="list-group-item nav-link" href="https://youtu.be/4WjUSN0qIhc" target="_blank">Design A Code-Deployment System</a>
        <a className="list-group-item nav-link" href="Concept.js">Design AlgoExpert</a>
        <a className="list-group-item nav-link" href="Concept.js">Design A Stockbroker</a>
        <a className="list-group-item nav-link" href="Concept.js">Design Amazon</a>
        <a className="list-group-item nav-link" href="Concept.js">Design The Reddit API</a>
        <a className="list-group-item nav-link" href="Concept.js">Design Facebook News Feed</a>
        <a className="list-group-item nav-link" href="Concept.js">Design Google Drive</a>
        <a className="list-group-item nav-link" href="Concept.js">Design Netflix</a>
        <a className="list-group-item nav-link" href="Concept.js">Design The Uber API</a>
        <a className="list-group-item nav-link" href="Concept.js">Design Tinder</a>
        <a className="list-group-item nav-link" href="Concept.js">Design Tinder</a>
        <a className="list-group-item nav-link" href="Concept.js">Design Slack</a>
        <a className="list-group-item nav-link" href="Concept.js">Design Airbnb</a>
        <a className="list-group-item nav-link" href="Concept.js">Design The Twitch API</a>
      </ul>
      </div>
      <footer className="page-footer">
        <div className="footer-copyright text-center py-3">©2022 : Made by Unnie :)</div>
      </footer>
    </Fragment>
  );
}





