"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">

      I graduated with <span className="font-medium">First-Class Honours in BEng Software Engineering </span>
      from the University of Westminster and began my career as a <span className="font-medium">Frontend Engineer</span> at 
      Velaris, contributing to the platform's development from its early startup phase. Velaris is a Customer Success Management 
       platform built on React, Node.js, and AWS, designed to help businesses enhance customer retention
        and engagement.
      </p>
      <p>
      My passion also lies in <span className="font-medium">Business Intelligence and Analytics</span>, 
        where I aim to leverage data-driven insights to create futuristic solutions for businesses. Beyond technology, I have a 
        deep appreciation for piano music and enjoy reading books on life, technology, and psychology in 
        my free time, always looking to expand my knowledge and perspective.
      </p>
    </motion.section>
  );
}
