
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import About from "./About";
import AboutSection from "@/components/AboutSection";
import EventsSection from "@/components/EventsSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Hero />
      </motion.div>
      <AboutSection/>
      <EventsSection/>
      <TeamSection/>
      <ContactSection/>
      <Footer/>
      
    </div>
  );
};

export default Index;
