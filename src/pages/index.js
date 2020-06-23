import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Booking, Skills, Contact, Projects } from 'components/landing';
import { useTreatments } from 'gatsby-plugin-splitio';

export default () => {
  const { AppointmentBooking } = useTreatments(['AppointmentBooking']);
  return (
    <Layout>
      <SEO />
      <Intro />
      <Projects />
      <Skills />
      <Contact />
      {AppointmentBooking.treatment === 'on' && <Booking />}
    </Layout>
  );
};
