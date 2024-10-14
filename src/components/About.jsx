import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        Hi there! I’m Narek Primyan, a Software Developer with 1 year of experience under my belt. I
        specialize crafting dynamic and accessible web applications that users love. Collaborating
        seamlessly with design teams and backend developers, I've honed my craft in making visual
        ideas a tangible reality.
      </motion.p>
    </>
  );
};

export default About;
