import React, { Fragment } from 'react';
import '../Style/Concept.css';
import '../Style/Navbar.css'

export default function Concept() {
  return(
  <Fragment>
  <div className="wrapper" style={{backgroundColor: "#bd4d7a", height:"300px", marginTop:"0%"}}>
    <div className="outer">
      <h2>Systems Design Interview Tips</h2>
      <br></br>
      <p>What'll make you stand out.</p>
      <br></br>
    </div>
  </div>

  <div className="card text-center">
    <div className="card-body">
      <h5 className="card-title">1. Gathering System Requirements</h5>
      <p className="card-text">So what are we designing exactly? No but what exactly are we designing? Okay but what is it exactly that we're designing?</p>
      <a href="https://youtu.be/1xU4CztzIX0" className="btn " style={{backgroundColor:"#bd4d7a",color:"white"}} target="_blank">Go to video</a>
    </div>
  </div>
  <div className="card text-center">
    <div className="card-body">
      <h5 className="card-title">2. Planning</h5>
      <p className="card-text">Step 1) Ace the systems design interview. <br></br>Step 2) Don't fail the systems design interview.<br></br>Step 3) Profit.</p>
      <a href="https://youtu.be/zzuuao7W1JA" className="btn " style={{backgroundColor:"#bd4d7a",color:"white"}} target="_blank">Go to video</a>
    </div>
  </div>
  <div className="card text-center">
    <div className="card-body">
      <h5 className="card-title">3. Estimation</h5>
      <p className="card-text">How many golf balls can you fit in an airplane? Just kidding—not that type of estimation. How many machines do you need to store metadata about 50 million users in memory?</p>
      <a href="https://youtu.be/O6v1ISbMUnE" className="btn " style={{backgroundColor:"#bd4d7a",color:"white"}} target="_blank">Go to video</a>
    </div>
  </div>
  <div className="card text-center">
    <div className="card-body">
      <h5 className="card-title">4. Communication</h5>
      <p className="card-text">Communication is an essential ingredient to success in all aspects of life—in relationships, in workplaces, in sports, and yes, even in systems design interviews!</p>
      <a href="https://youtu.be/9xixBz6yeQI" className="btn " style={{backgroundColor:"#bd4d7a",color:"white"}} target="_blank">Go to video</a>
    </div>
  </div>
  <div className="card text-center">
    <div className="card-body">
      <h5 className="card-title">5. Diagramming</h5>
      <p className="card-text">Ideally you can do a little better than this...</p>
      <a href="https://youtu.be/y2ZOR2trKXs" className="btn " style={{backgroundColor:"#bd4d7a",color:"white"}} target="_blank">Go to video</a>
    </div>
  </div>

  <footer className="page-footer">
    <div className="footer-copyright text-center py-3">©2022 : Made by Unnie :)</div>
  </footer>
  </Fragment>
  );
}
