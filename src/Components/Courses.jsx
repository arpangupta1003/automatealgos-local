import React from "react";
import CourseCard from "./CourseCard";
import '../CSS/Courses.css';
const Courses = () => {
  return (
    <>
      <div className="Container" id="courseId">
        <div className="headingDiv">
          <center>
            <h2>Courses We Offer</h2>
          </center>
          <center>
            <p className="aboutpara">
              We offer the best courses around - from Python for Finance,<br/>
              Algorithmic Trading with Python, Algorithmic Trading with<br/>
              AmiBroker and more!
            </p>
          </center>
          <div className="CourseCardDiv">
            <CourseCard  />
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
