import React from 'react';
import PropTypes from 'prop-types';
import { CiStar } from "react-icons/ci";

import '../../CSS/TestimonialCard.css'

const TestimonialCard = ({ name, position, content, image, currentIndex, index }) => {
    const isVisible = index === currentIndex;

    return (
        <div className={`testimonial-card ${isVisible ? 'visible' : ''}`}>
            <div className="testimonial-content">
                <p className="testimonial-text">{content}</p>
            </div>
            <div className="testimonial-footer">
                <img className="testimonial-image" src={image} alt={name} />
                <div className="testimonial-author">
                    <p className="testimonial-author-name">{name}</p>
                    <p className="testimonial-author-position">{position}</p>
                    <CiStar />
                    <CiStar />
                    <CiStar />

                </div>
            </div>
        </div>
    );
};

TestimonialCard.propTypes = {
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    currentIndex: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
};

export default TestimonialCard;
