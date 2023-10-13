import React from "react";
import css from "./Hero.module.scss";
import {motion} from 'framer-motion';
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";


const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
       variants={staggerContainer}
       initial="hidden"
       whileInView="show"
       viewport={{once: false, amount: 0.25}}
       className={`innerWidth ${css.container}`}>

        {/*upperElements */}
        <div className={css.upperElements}>
          <motion.span
           variants={fadeIn("right", "tween", 0.2, 1)}
           className="primaryText">


            Webjob <br /> Technologies
          </motion.span>
          <motion.span
           variants={fadeIn("left", "tween", 0.4, 1)}
        
           className="secondaryText">
           Full service mobile, web, software,AR/VR, <br /> and IoT technology solutions.
          </motion.span>
        </div>

        {/*person image */}
        <motion.div
           variants={fadeIn("up", "tween", 0.3, 1)}
         className={css.person}>
          <motion.img
           variants={slideIn("up", "tween", 0.5, 1.3)}
           src="./person.png" alt="" />
        </motion.div>

        {/*email*/}
        <a href="mailto:wallertim23@gmail.com" className={css.email}>
          wallertim23@gmail.com
        </a>

        {/*lowerElements */}
        <div className={css.lowerElements}>
          <motion.div
           variants={fadeIn("right", "tween", 0.3, 1)}
           className={css.experience}>
            <div className="primaryText">5+</div>
            <div className="secondaryText">
              <div>Years</div>
              <div>Experience</div>
            </div>
          </motion.div>

          <motion.div
           variants={fadeIn("left", "tween", 0.5, 1)}
           className={css.certificate}>
            <img src="/certificate.png" alt="" />
            <span>CERTIFIED PROFATIONAL</span>
            <span>UI/UX DESIGNER</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
