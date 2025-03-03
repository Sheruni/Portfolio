"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import SubmitBtn from "./submit-btn";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const sendEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_lv5ak1r", // 🔹 Replace with your EmailJS Service ID
        "template_7ob696o", // 🔹 Replace with your EmailJS Template ID
        event.currentTarget,
        "6ssqTvluWd2C4-QuN" // 🔹 Replace with your EmailJS Public Key
      )
      .then(
        () => {
          toast.success("Email sent successfully!");
          event.currentTarget.reset();
        },
        (error) => {
          toast.error("Failed to send email. Try again later.");
          console.error(error);
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <motion.section
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:sherferdo@gmail.com">
          sherferdo@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form onSubmit={sendEmail} className="mt-10 flex flex-col dark:text-black">
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn isLoading={loading} />
      </form>
    </motion.section>
  );
}
