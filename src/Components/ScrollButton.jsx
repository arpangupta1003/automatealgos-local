// import React, {useState} from 'react'; 
// import {FaArrowCircleUp} from 'react-icons/fa'; 
// // import { Button } from './Styles'; 

// const ScrollButton = () =>{ 

// const [visible, setVisible] = useState(false) 

// const toggleVisible = () => { 
// 	const scrolled = document.documentElement.scrollTop; 
// 	if (scrolled > 300){ 
// 	setVisible(true) 
// 	} 
// 	else if (scrolled <= 300){ 
// 	setVisible(false) 
// 	} 
// }; 

// const scrollToTop = () =>{ 
// 	window.scrollTo({ 
// 	top: 0, 
// 	behavior: 'smooth'
// 	/* you can also use 'auto' behaviour 
// 		in place of 'smooth' */
// 	}); 
// }; 

// window.addEventListener('scroll', toggleVisible); 

// return ( 
// 	<button>
// 	<FaArrowCircleUp onClick={scrollToTop} 
// 	style={{display: visible ? 'inline' : 'none', float:'left'}} /> 
// 	</button>
// ); 
// } 

// export default ScrollButton; 

// ScrollToTopButton.js

import React, { useState, useEffect } from 'react';
import { MdArrowUpward } from "react-icons/md";

import '../CSS/ScrollButton.css'; // Import your CSS file

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down 20px
  const handleScroll = () => {
    if (window.scrollY > 20) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Add a scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      id="scrollToTopBtn"
      className={isVisible ? 'show' : 'hide'}
      onClick={scrollToTop}
    >
      <MdArrowUpward style={{height:"30px", width:"30px"}} />

    </button>
  );
};

export default ScrollButton;

