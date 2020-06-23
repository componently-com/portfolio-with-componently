import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Booking, Skills, Contact, Projects } from 'components/landing';

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <Projects />
    <Skills />
    <Contact />
    <Booking />
  </Layout>
);
