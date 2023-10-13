import React, { useRef, useState } from "react";
import css from "./Header.module.scss";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import { HiPhone } from "react-icons/hi";
import { BiMenuAltRight } from "react-icons/bi";
import useHeaderShadow from "../../hooks/useHeaderShadow";
import useOutsideAlerter from '../../hooks/useOutsideAlerter';
import {NavLink} from 'react-router-dom';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();
  const menuRef = useRef()

useOutsideAlerter(
  {
    menuRef,
    setMenuOpened
  }
)


  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={headerVariants}
      viewport={{ once: false, amount: 0.25 }}
      className={`bg-primary paddings ${css.wrapper}`}
      style={{ boxShadow: headerShadow }}
    >
      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={css.name}><NavLink to="/" style={{textDecoration:"none", color:"black"}}> <img style={{width:"10rem"}} src="./logo.png" alt="" /> </NavLink></div>

        <ul
        ref={menuRef}
          style={getMenuStyles(menuOpened)}
          className={`flexCenter ${css.menu}`}
        >
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio">Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="/testimonils">Testimonils</NavLink>
          </li>
          <li className={`flexCenter ${css.phone}`}>
            <p>+123 456 7890</p>
            <HiPhone size={"40px"} />
          </li>
        </ul>
        {/* for medium and samll screens*/}
        <div
          className={css.menuIcon}
          onClick={() => setMenuOpened((perv) => !perv)}
        >
          <BiMenuAltRight size={"30px"} />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
