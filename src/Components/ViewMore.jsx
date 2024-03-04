import React from 'react'
import { Link } from 'react-router-dom';
import '../CSS/ViewMore.css';
import { useNavigate } from 'react-router-dom';
const ViewMore = () => {

  const navigate=useNavigate();

  
  
  const go = () => {
    navigate('/services');  

  }
  return (
    <>
    <button onClick={go} id='viewmoreid'>View More</button>
    {/* <Link to='/services/details'> view more</Link> */}
    </>
  )
}

export default ViewMore