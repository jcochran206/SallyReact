import React from 'react';
import './App.css';


function Header() {
    return(
    <div>
    <header>
        <h1>Sally's resume</h1>    
    </header>

    <nav>
        <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about_me">About me</a></li>
        <li><a href="/blog">Blog</a></li>
        </ul>
    </nav>
    </div> 
    );

}

  export default Header;