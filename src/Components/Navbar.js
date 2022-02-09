import React, { Fragment } from 'react'; 
import '../Style/Navbar.css' 
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom';
import Concept from '../Components/Concept'

export default function Navbar() {
  return (
    <Fragment>
      <nav className="nav nav-pills flex-column flex-sm-row" >
          <a className="flex-sm-fill text-sm-center nav-link" href="#" style={{color:"black"}}>SystemGuru</a>
          <a className="flex-sm-fill text-sm-center nav-link" ><Link to="/concept" style={{textDecoration:"none",color:"black"}} target="_blank">System Design Concept</Link></a>
          <a className="flex-sm-fill text-sm-center nav-link "><Link to="/" style={{textDecoration:"none",color:"white",backgroundColor:"#bd4d7a",padding:"0.5rem",borderRadius:"0.5rem"}}>System Design Questions</Link></a>
          <a className="flex-sm-fill text-sm-center nav-link "><Link to="/interview" style={{textDecoration:"none",color:"black"}} target="_blank">System Design Interview tips</Link></a>
    </nav>
      <div className='container'>
      <ul className="list-group">
        <a className="list-group-item nav-link" href="https://youtu.be/4WjUSN0qIhc" target="_blank">Design A Code-Deployment System</a>
        <a className="list-group-item nav-link" href="https://youtu.be/PmDJEAEHg3M" target="_blank">Design AlgoExpert</a>
        <a className="list-group-item nav-link" href="https://youtu.be/dusRWtSvxuY" target="_blank">Design A Stockbroker</a>
        <a className="list-group-item nav-link" href="https://youtu.be/rugOQunQV1Y" target="_blank">Design Amazon</a>
        <a className="list-group-item nav-link" href="https://youtu.be/J6FTOPSvJFc" target="_blank">Design The Reddit API</a>
        <a className="list-group-item nav-link" href="https://youtu.be/q9IbxgxFelw" target="_blank">Design Facebook News Feed</a>
        <a className="list-group-item nav-link" href="https://youtu.be/lu-pjUdCFDg" target="_blank">Design Google Drive</a>
        <a className="list-group-item nav-link" href="https://youtu.be/O-7VEB3k7pU" target="_blank">Design Netflix</a>
        <a className="list-group-item nav-link" href="https://youtu.be/TiwHLFBvVy8" target="_blank">Design The Uber API</a>
        <a className="list-group-item nav-link" href="https://youtu.be/TNuQO8m_Vmc" target="_blank">Design Tinder</a>
        <a className="list-group-item nav-link" href="https://youtu.be/RXF_E1WgdWg" target="_blank">Design Slack</a>
        <a className="list-group-item nav-link" href="https://youtu.be/pUL66hsXNxY" target="_blank">Design Airbnb</a>
        <a className="list-group-item nav-link" href="https://youtu.be/4DA9Jvi8mQ8" target="_blank">Design The Twitch API</a>
      </ul>
      </div>
      <a href="/Solution Walkthrough.pdf" className="btn " style={{backgroundColor:"#bd4d7a",color:"white",marginTop:"3rem"}} target="_blank">Solution Walkthrough Pdf</a>
      <footer className="page-footer">
        <div className="footer-copyright text-center py-3">©2022 : Made by Unnie :)</div>
      </footer>
    </Fragment>
  );
}





