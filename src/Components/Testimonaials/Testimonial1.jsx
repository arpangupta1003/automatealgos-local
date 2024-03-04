import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../../CSS/Testimonial1.css";
const testimonials = [
  {
    name: "Shreyansh Daga",
    position: "CEO",
    content:
      "Sincere teacher, goes above and beyond to help you understand concepts and solve queries. Sincere teacher, goes above and beyond to help you understand concepts and solve queries.",
    image:
      "https://automatealgos.in/assets/images/testimonial/shreyanshdaga.jpeg",
  },
  {
    name: "M Sathish Kumar",
    position: "Marketing Manager",
    content: `I am incredibly grateful for Archit's mentorship in Python. His deep knowledge, patient guidance, and passion for teaching have transformed my coding journey. Archit's dedication has empowered me to tackle complex challenges with confidence.`,
    image:
      "https://automatealgos.in/assets/images/testimonial/msathishkumar.jpeg",
  },

  {
    name: "Gaurav Mansinghani",
    position: "CTO",
    content:
      "Archit sir and Yogesh sir are excellent and very patient with handling student doubts and queries and are a great team, coming from a non coder like me , I must say im greatful for the teams effort and dilligence.",
    image:
      "https://automatealgos.in/assets/images/testimonial/gauravmansinghani.jpg",
  },
  {
    name: "Siddharth Nair",
    position: "CTO",
    content:
      " I really had fun in your live classes. Communication was clear. But most importantly you put in a lot of effort. Took time to clear our doubts. And your knowledge is also impressive.",
    image:
      "https://automatealgos.in/assets/images/testimonial/siddharthnair.jpeg",
  },
  {
    name: "Sagaya Abhinesh R",
    position: "CTO",
    content: `HI Sir! This is Sagaya of Batch DA47 From Coding Invaders. You are one of those teachers that I will never forget. You made learning data analytics easier by going beyond the syllabus and making us do extra stuff so that we'll understand each and every concepts. And you solve every doubts of the students without leaving anyone. Thank you so much sir! Will miss you a lot! `,
    image:
      "https://automatealgos.in/assets/images/testimonial/sagayaabineshr.jpeg",
  },
  {
    name: "Aniurag Dhariya",
    position: "CTO",
    content: `Thank you so so so much sir for being our TEACHER....... You are too polite and humble...../\....... Please be in Touch....`,
    image:
      "https://automatealgos.in/assets/images/testimonial/anuragdhariya.jpeg",
  },
];
export default class Testimonials extends Component {
  render() {
    return (
      <>
        <div className="TestOuterDiv">
          <div className="TestInnerDiv">
          <center>
            <h1>Testimonials</h1>
          </center>
          <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={6100}
          >
            {testimonials.map((data, index) => (
              <div>
                <img src={data.image} />
                <div className="myCarousel">
                  <h3 style={{fontSize:"1.4em", margin:"15px 0px 10px 0px"}}>{data.name}</h3>
                  {/* <h4>{data.position}</h4> */}
                  <p style={{fontSize:"1.2em"}}>{data.content}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        </div>
      </>
    );
  }
}
