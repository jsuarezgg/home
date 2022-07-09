import React from 'react';
import { Config } from 'types';
import { Instagram, GitHub, LinkedIn, Resume } from 'icons';

const config: Config = {
  name: {
    display: 'Juan Manuel Suárez',
    aria: 'My name is Juan Manuel Suárez',
  },
  title: {
    display: 'Analytics Engineer',
    aria: 'I am an analytics engineer',
  },
  buttons: [
    {
      display: 'GitHub',
      aria: 'Visit my GitHub profile',
      icon: <GitHub />,
      href: 'https://github.com/jsuarezgg',
    },
    {
      display: 'LinkedIn',
      aria: 'Visit my LinkedIn profile',
      icon: <LinkedIn />,
      href: 'https://www.linkedin.com/in/jsuarezg/',
    },
    {
      display: 'Resume',
      aria: 'View my resume in Google Drive',
      icon: <Resume />,
      href: 'https://jmsgpersonal.s3.amazonaws.com/Resume_Juan_Suarez.pdf',
    },
    {
      display: 'Instagram',
      aria: 'Visit my Instagram profile',
      icon: <Instagram />,
      href: 'https://www.instagram.com/jsuarez.g/',
    },
  ],
};

export default config;
