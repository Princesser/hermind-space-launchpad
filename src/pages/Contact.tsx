import React from 'react';
import { motion } from 'framer-motion';
import ContactUs from '@/components/ContactUs';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20"
    >
      <ContactUs />
    </motion.div>
  );
};

export default Contact;
