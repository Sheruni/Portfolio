import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaCode } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import premier_league from "@/public/premier_league.jpg";
import train_reservation from "@/public/train_reservation.jpg";
import elegance from "@/public/elegance.gif";
import emoscape from "@/public/emoscape.gif";
import bugscope from '@/public/bugscope.gif';
import dp from "@/public/DP.png";
import cv from "@/public/CV.pdf";

export const PROFILE_IMAGE_URL = dp;
export const CV = cv;

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Graduated from University of Westminster',
    location: 'IIT, Sri Lanka',
    description:
      'I graduated with First-Class Honours in BEng Software Engineering from the University of Westminster. During my time at university, I was an active Toastmaster and part of IEEE, engaging in public speaking and professional networking. I also participated in Google Hashcode, securing 6th place in the IIT Hub.',
    icon: React.createElement(LuGraduationCap),
    date: '2019-2024',
  },
  {
    title: 'Front-End Engineer Intern',
    location: 'Velaris',
    description:
      'During my internship at Velaris, I worked as a Front-End Developer, building applications with React and creating prototypes using Adobe XD and Figma to enhance the user experience.',
    icon: React.createElement(CgWorkAlt),
    date: '2022',
  },
  {
    title: 'Software Engineer',
    location: 'Velaris',
    description:
      "I'm now a full-stack engineer working with React, TypeScript, Node.js, and PostgreSQL. ",
    icon: React.createElement(FaCode),
    date: '2023 - present',
  },
  {
    title: 'MSc Business Transformation',
    location: 'Arden University',
    description:
      "The Master's program is designed to help me develop a strategic understanding of business transformation. I am learning how to apply business intelligence and analytics to create innovative solutions for businesses. The program covers key areas such as the contemporary business environment, agile project management, big data, and cloud-based solutions, equipping me with the skills to navigate and drive digital transformation in modern enterprises.",
    icon: React.createElement(LuGraduationCap),
    date: '2024 - 2025',
  },
] as const;

export const projectsData = [
  {
    title: 'ELEGANCE',
    description:
      'An e-commerce website which caters online shopping facilities for women.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    imageUrl: elegance,
  },
  {
    title: 'Train Ticket Reservation System',
    description: `A railway ticket reservation and queue management system which enables customers
                            to book any number of seats for a selected location(both one way and round trip), on any
                            preferred date.`,
    tags: ['Java', 'JavaFX', 'MongoDB'],
    imageUrl: train_reservation,
  },
  {
    title: 'Football Stats Management System',
    description: `A java programme based on OOP, to store, retrieve and manage Premier League
                            Information. Includes options such as search for match, generate random match, view
                            standings etc.`,
    tags: ['Java', 'SpringBoot', 'Angular'],
    imageUrl: premier_league,
  },
  {
    title: 'Emoscape',
    description: `A mobile application for music recommendation based on emotion recognition with a dataset
                            trained with Fer2013. Operates as a manual player with offline options.`,
    tags: ['React Native', 'Flask', 'Python', 'Firebase'],
    imageUrl: emoscape,
  },
  {
    title: 'BugScope',
    description: ` A deep learning approach to bug localization using neural networks, by employing the GraphCodeBERT model.`,
    tags: ['Next.js', 'Flask', 'Python', 'MongoDB'],
    imageUrl: bugscope,
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Tailwind',
  'Redux',
  'GraphQL',
  'PostgreSQL',
  'Python',
  'GIT',
] as const;
