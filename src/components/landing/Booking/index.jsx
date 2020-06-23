import React from 'react';
import { Container } from 'components/common';

export const Booking = () => (
  <div as={Container} id="booking">
    <iframe
      src="https://app.acuityscheduling.com/schedule.php?owner=19973619"
      title="Schedule Appointment"
      width="100%"
      height="1000"
      frameBorder="0"
    ></iframe>
    <script src="https://embed.acuityscheduling.com/js/embed.js" type="text/javascript"></script>
  </div>
);
