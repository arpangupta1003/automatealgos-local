import React, { useState } from 'react';
import '../../CSS/TestimonialSection.css';


const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Shreyansh Daga',
      position: 'CEO',
      content: 'Sincere teacher, goes above and beyond to help you understand concepts and solve queries. Sincere teacher, goes above and beyond to help you understand concepts and solve queries.',
      image: 'https://automatealgos.in/assets/images/testimonial/shreyanshdaga.jpeg',
    },
    {
      name: 'M Sathish Kumar',
      position: 'Marketing Manager',
      content: `I am incredibly grateful for Archit's mentorship in Python. His deep knowledge, patient guidance, and passion for teaching have transformed my coding journey. Archit's dedication has empowered me to tackle complex challenges with confidence.`,
      image: 'https://automatealgos.in/assets/images/testimonial/msathishkumar.jpeg',
    },

    {
      name: 'Gaurav Mansinghani',
      position: 'CTO',
      content: 'Archit sir and Yogesh sir are excellent and very patient with handling student doubts and queries and are a great team, coming from a non coder like me , I must say im greatful for the teams effort and dilligence.',
      image: 'https://automatealgos.in/assets/images/testimonial/gauravmansinghani.jpg',
    },
    {
      name: 'Siddharth Nair',
      position: 'CTO',
      content: ' I really had fun in your live classes. Communication was clear. But most importantly you put in a lot of effort. Took time to clear our doubts. And your knowledge is also impressive.',
      image: 'https://automatealgos.in/assets/images/testimonial/siddharthnair.jpeg',
    },
    {
      name: 'Sagaya Abhinesh R',
      position: 'CTO',
      content: `HI Sir! This is Sagaya of Batch DA47 From Coding Invaders. You are one of those teachers that I will never forget. You made learning data analytics easier by going beyond the syllabus and making us do extra stuff so that we'll understand each and every concepts. And you solve every doubts of the students without leaving anyone. Thank you so much sir! Will miss you a lot! `,
      image: 'https://automatealgos.in/assets/images/testimonial/sagayaabineshr.jpeg',
    },
    {
      name: 'Aniurag Dhariya',
      position: 'CTO',
      content: `Thank you so so so much sir for being our TEACHER....... You are too polite and humble...../\....... Please be in Touch....`,
      image: 'https://automatealgos.in/assets/images/testimonial/anuragdhariya.jpeg',
    }
  ];

  // const [currentIndex, setCurrentIndex] = useState(0);

  // const handleNext = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  // };

  return (
    <>
      <div className='TestimonialDiv'>
        <center> <h2 className='testimonialsHeading'>Testimonials</h2></center>
        <div id="FUCK" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <div className="testimonial-card">
                  <div className="testimonial-content">
                    <p className="testimonial-text">{testimonial.content}</p>
                  </div>
                  <div className="testimonial-footer">
                    <img className="testimonial-image" src={testimonial.image} alt={testimonial.name} />
                    <div className="testimonial-author">
                      <p className="testimonial-author-name">{testimonial.name}</p>
                      <p className="testimonial-author-position">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span id='previousButtonId' className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          
        </div>
      </div>
    </>










    
  );
};

export default TestimonialsSection;
