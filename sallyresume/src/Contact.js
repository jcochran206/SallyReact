import React from 'react';
import './App.css';
import Imageholder from './Imageholder';


function Contact() {
    return(
    <div className="contact">
    <h3>Contact info: </h3>
      <ul>
        <li>Name: Sally</li>
        <li><a href="mailto:nowhere@mozilla.org">Mail Sally </a></li>
        <li> Phone: 555-555-5555</li>
      </ul>
      <address>
        <p>555 Broadway street</p>
        <p>New York, NY, 99865</p> 
      </address>
      <Imageholder />
    </div> 
    );

}

  export default Contact;