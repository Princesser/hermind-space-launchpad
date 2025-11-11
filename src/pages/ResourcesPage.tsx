import React from 'react';
import { motion } from 'framer-motion';
import Resources from '@/components/Resources';
import WaitlistForm from '@/components/WaitlistForm';
import Testimonials from '@/components/Testimonials';

const ResourcesPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20"
    >
      <Resources />
      <Testimonials />
      <WaitlistForm />
    </motion.div>
  );
};

export default ResourcesPage;
