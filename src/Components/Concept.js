import React, { Fragment } from 'react';
import '../Style/Concept.css';
import '../Style/Navbar.css'
import VideoPlayer from "react-video-js-player"

export default function Concept() {
  return(
  <Fragment>
  <div className="wrapper" style={{backgroundColor: "#bd4d7a", height:"300px", marginTop:"0%"}}>
    <div className="outer">
      <h2>System Design Concepts</h2>
      <br></br>
      <p>The foundational knowledge you need to ace the systems design interviews.
      <br></br>
      This section contains 25 videos meant for system design fundamentals. </p>
    </div>
  </div>

  <div className="card text-center">
    <div className="card-body">
      <h5 className="card-title">1. Introduction</h5>
      <p className="card-text">Where the coding interview serves primarily as an assessment of your problem-solving ability, the systems design interview is a test of your engineering knowledge veiled behind the facade of an open-ended design question.
      Welcome to the crucible of modern software.</p>
      <a href="https://youtu.be/hmFAIyGPXFU" className="btn " style={{backgroundColor:"#bd4d7a",color:"white"}} target="_blank">Go to video</a>
    </div>
  </div>
  <div className="card text-center">
    <div className="card-body">
      <h5 className="card-title">2. What Are Design Fundamentals?</h5>
      <p className="card-text">Building scalable, production-ready applications is both art and science. Science, in that it requires knowledge of many topics in computer engineering; art, in that it demands an eye for making smart design choices and piecing together the right technologies.
      Master both disciplines and you, too, can become a Systems Expert.</p>
      <a href="https://youtu.be/r66wVGvlYMQ" className="btn " style={{backgroundColor:"#bd4d7a",color:"white"}} target="_blank">Go to video</a>
    </div>
  </div>
  <div className="card text-center">
    <div className="card-body">
      <h5 className="card-title">3. Client—Server Model</h5>
      <p className="card-text">A client is a thing that talks to servers. A server is a thing that talks to clients. The client—server model is a thing made up of a bunch of clients and servers talking to one another.
      And that, kids, is how the Internet works!</p>
      <a href="https://youtu.be/3LimWOnnP8g" className="btn " style={{backgroundColor:"#bd4d7a",color:"white"}} target="_blank">Go to video</a>
    </div>
  </div>
  <div className="card text-center">
    <div className="card-body">
      <h5 className="card-title">4. Network Protocols</h5>
      <p className="card-text">IP packets. TCP headers. HTTP requests.
      As daunting as they may seem, these low-level networking concepts are essential to understanding how machines in a system communicate with one another. And as we all know, proper communication is key for thriving relationships!</p>
      <a href="https://youtu.be/Cytw-hcrFEs" className="btn " style={{backgroundColor:"#bd4d7a",color:"white"}} target="_blank">Go to video</a>
    </div>
  </div>
  <div className="card text-center">
    <div className="card-body">
      <h5 className="card-title">5. Storage</h5>
      <p className="card-text">An entire video dedicated just to the storage of data?
      Yes! Multiple videos, in fact, as you'll see later on when we discuss databases. As it turns out, information storage is an incredibly complex topic that is of vital importance to systems design. 
      Don't even think of skipping this lesson!</p>
      <a href="https://youtu.be/dbcUfDVjLfs" className="btn " style={{backgroundColor:"#bd4d7a",color:"white"}} target="_blank">Go to video</a>
    </div>
  </div>
  <div className="card text-center">
    <div className="card-body">
      <h5 className="card-title">6. Latency And Throughput</h5>
      <p className="card-text">f you've ever experienced lag in a video game, it was most likely due to a combination of high latency and low throughput. And lag sucks.
      It is therefore your Call of Duty to master these two concepts and to join the crusade against high ping.</p>
      <a href="https://youtu.be/lIbo1TBt714" className="btn " style={{backgroundColor:"#bd4d7a",color:"white"}} target="_blank">Go to video</a>
    </div>
  </div>
  <div className="card text-center">
    <div className="card-body">
      <h5 className="card-title">7. Availability</h5>
      <p className="card-text">Oops! This content is unavailable right now. Please try again later.
      Just kidding! SystemsExpert is a highly available system.</p>
      <a href="https://youtu.be/zrnsa60m-lw" className="btn " style={{backgroundColor:"#bd4d7a",color:"white"}} target="_blank">Go to video</a>
    </div>
  </div>
  <div className="card text-center">
    <div className="card-body">
      <h5 className="card-title">8. Caching</h5>
      <p className="card-text">What do a punching bag and a cache have in common?
      They can both take a hit!  (ง ͠° ل͜ ͡°)ง</p>
      <a href="#" className="btn " style={{backgroundColor:"#bd4d7a",color:"white"}}>Go to video</a>
    </div>
  </div>
  <div className="card text-center">
    <div className="card-body">
      <h5 className="card-title">9. Proxies</h5>
      <p className="card-text">Often used by nefarious hackers to conceal their identity and obfuscate their location, these special intermediary servers boast many important real-life applications within the context of caching, access control, and censorship bypassing, 
      amongst other things.</p>
      <a href="#" className="btn " style={{backgroundColor:"#bd4d7a",color:"white"}}>Go to video</a>
    </div>
  </div>
  <div className="card text-center">
    <div className="card-body">
      <h5 className="card-title">10. Load Balancers</h5>
      <p className="card-text">Relentlessly distributing network requests across multiple servers, these digital traffic cops act as watchful guardians for your system, ensuring that it operates at peak performance day and night.</p>
      <a href="#" className="btn " style={{backgroundColor:"#bd4d7a",color:"white"}}>Go to video</a>
    </div>
  </div>
  <div className="card text-center">
    <div className="card-body">
      <h5 className="card-title">11. Hashing</h5>
      <p className="card-text">Hashing? Like from hash tables? Should be simple enough, right?
      The good news is that, yes, hashing like from hash tables.
      The bad news is that, no, not simple enough. The video duration and thumbnail should be ominously indicative.</p>
      <a href="#" className="btn " style={{backgroundColor:"#bd4d7a",color:"white"}}>Go to video</a>
    </div>
  </div>
  <div className="card text-center">
    <div className="card-body">
      <h5 className="card-title">12. Relational Databases</h5>
      <p className="card-text">Tables and ACID.No, we're not describing a drug lord's desk, but rather referring to key properties of relational databases. 
      There's a lot of material to cover here, so hit the play button, kick back, and get ready to store tons of knowledge in the biggest database of them all: your brain.</p>
      <a href="#" className="btn " style={{backgroundColor:"#bd4d7a",color:"white"}} target="_blank">Go to video</a>
    </div>
  </div>
  <div className="card text-center">
    <div className="card-body">
      <h5 className="card-title">13. Key-Value Stores</h5>
      <p className="card-text">One of the most commonly used NoSQL paradigms today, the key-value store bases its data model on the associative array data type.The result? A fast, flexible storage machine that resembles a hash table. That's right folks, our favorite friendly neighborhood data structure strikes again!</p>
      <a href="#" className="btn " style={{backgroundColor:"#bd4d7a",color:"white"}}>Go to video</a>
    </div>
  </div>
  <div className="card text-center">
    <div className="card-body">
      <h5 className="card-title">14. Specialized Storage Paradigms</h5>
      <p className="card-text">Yup. This is another video about storage.Nope. This isn't the last video about storage</p>
      <a href="#" className="btn " style={{backgroundColor:"#bd4d7a",color:"white"}}>Go to video</a>
    </div>
  </div>
  <div className="card text-center">
    <div className="card-body">
      <h5 className="card-title">15. Replication And Sharding</h5>
      <p className="card-text">A system's performance is often only as good as its database's; optimize the latter, and watch as the former improves in tandem!
      On that note, in this video we'll examine how data redundancy and data partitioning techniques can be used to enhance a system's fault tolerance, throughput, and overall reliability.</p>
      <a href="#" className="btn " style={{backgroundColor:"#bd4d7a",color:"white"}}>Go to video</a>
    </div>
  </div>
  <div className="card text-center">
    <div className="card-body">
      <h5 className="card-title">16. Leader Election</h5>
      <p className="card-text">Citizens in a society typically elect a leader by voting for their preferred candidate. But how do servers in a distributed system choose a master node? Via algorithms of course!
      This form of algorithmic democracy is known as "leader election", though we personally think "algorithmocracy" sounds way cooler.</p>
      <a href="#" className="btn " style={{backgroundColor:"#bd4d7a",color:"white"}}>Go to video</a>
    </div>
  </div>
  <div className="card text-center">
    <div className="card-body">
      <h5 className="card-title">17. Peer-To-Peer Networks</h5>
      <p className="card-text">Equality for all.Sharing is caring.Unity makes strength.The more the merrier.Teamwork makes the dream work.Welcome to peer-to-peer networks!</p>
      <a href="#" className="btn " style={{backgroundColor:"#bd4d7a",color:"white"}} target="_blank">Go to video</a>
    </div>
  </div>
  <div className="card text-center">
    <div className="card-body">
      <h5 className="card-title">18. Polling And Streaming</h5>
      <p className="card-text">You can think of polling and streaming kind of like a classroom; sometimes students ask the teacher lots of questions, and other times they quiet down and listen attentively to the teacher's lecture.
      Now fire up the video and get ready to stream; you won't be able to poll here. Class is in session!</p>
      <a href="#" className="btn " style={{backgroundColor:"#bd4d7a",color:"white"}} target="_blank">Go to video</a>
    </div>
  </div>
  <div className="card text-center">
    <div className="card-body">
      <h5 className="card-title">19. Configuration</h5>
      <p className="card-text">The config file is like the genome of a computer application; it stores parameters that define your system's critical settings, much like your DNA stores the genes that define your physical characteristics.Unlike its biological counterpart though, the config file is easily editable. No gene therapy needed!</p>
      <a href="#" className="btn " style={{backgroundColor:"#bd4d7a",color:"white"}} target="_blank">Go to video</a>
    </div>
  </div>
  <div className="card text-center">
    <div className="card-body">
      <h5 className="card-title">20. Rate Limiting</h5>
      <p className="card-text">*Poke**Poke**Poke**Po——*Too many pokes! You just got rate limited.</p>
      <a href="#" className="btn " style={{backgroundColor:"#bd4d7a",color:"white"}} target="_blank">Go to video</a>
    </div>
  </div>
  <div className="card text-center">
    <div className="card-body">
      <h5 className="card-title">21. Logging And Monitoring</h5>
      <p className="card-text">In order to properly understand and diagnose issues that crop up within a system, it’s critical to have mechanisms in place that create audit trails of various events that occur within said system.So go ahead, unleash your inner Orwell and go full Big Brother on your application.</p>
      <a href="#" className="btn " style={{backgroundColor:"#bd4d7a",color:"white"}} target="_blank"> target="_blank"Go to video</a>
    </div>
  </div>
  <div className="card text-center">
    <div className="card-body">
      <h5 className="card-title">22.Publish/Subscribe Pattern</h5>
      <p className="card-text">Publish/Subscribe. Press/Tug. Produce/Consume. Push/Pull. Send/Receive. Throw/Catch. Thrust/Retrieve.Three of these can be used interchangeably in the context of systems design. The others cannot.</p>
      <a href="#" className="btn " style={{backgroundColor:"#bd4d7a",color:"white"}} target="_blank">Go to video</a>
    </div>
  </div>
  <div className="card text-center">
    <div className="card-body">
      <h5 className="card-title">23. MapReduce</h5>
      <p className="card-text">"MapReduce is a programming model for processing and generating big data sets with a parallel, distributed algorithm on a cluster."
      Does Wikipedia's nebulous definition confuse you? Of course it does. In this video, we'll map out this complex topic and reduce it to clear, easily-understood concepts. See what we did there?  ( ͡~ ͜ʖ ͡°)</p>
      <a href="#" className="btn " style={{backgroundColor:"#bd4d7a",color:"white"}} target="_blank">Go to video</a>
    </div>
  </div>
  <div className="card text-center">
    <div className="card-body">
      <h5 className="card-title">24. Security And HTTPS</h5>
      <p className="card-text">While network security is of critical importance to virtually any system, it's beyond the scope of most system design interviews.That being said, having even a cursory understanding of a few key concepts could very well materialize into the edge you need to ace your interview and secure—pun perhaps intended—a job offer.</p>
      <a href="#" className="btn " style={{backgroundColor:"#bd4d7a",color:"white"}} target="_blank">Go to video</a>
    </div>
  </div>
  <div className="card text-center">
    <div className="card-body">
      <h5 className="card-title">25. API Design</h5>
      <p className="card-text">So you've mastered all lessons hitherto on SystemsExpert, and you now feel confident you could ace any systems design interview. That's wonderful and all, but...could you pass an API design interview?
      If you're sweating bullets, then sweat no more. This final video is the last piece of the puzzle you need to become a true Systems Expert.</p>
      <a href="https://youtu.be/_qUmH1mK9jc" className="btn " style={{backgroundColor:"#bd4d7a",color:"white"}} target="_blank">Go to video</a>
    </div>
  </div>

  <footer className="page-footer">
    <div className="footer-copyright text-center py-3">©2022 : Made by Unnie :)</div>
  </footer>
  </Fragment>
  );
}
