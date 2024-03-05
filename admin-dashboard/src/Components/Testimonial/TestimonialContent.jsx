

import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { testimonialData } from '../../Data/Testimonial';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicketAlt } from '@fortawesome/free-solid-svg-icons';

function TestimonialContent() {
  return (
    <div>
      <h2>Testimonials</h2>
      {testimonialData.map((testimonial) => (
        <Card key={testimonial._id} className="testimonial-card">
          <CardContent>
            <Typography variant="h6">{testimonial.ticketData}</Typography>
            <Typography variant="body1">Price: {testimonial.price}</Typography>
            <Typography variant="body1">Location: {testimonial.location}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default TestimonialContent;