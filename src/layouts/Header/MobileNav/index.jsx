import React from "react";
import { IconItem, Move, Wrapper, Link } from "./styles";

import PropTypes from "prop-types";

const mobileNav = [
  {
    icon: "bx bxs-home",
    path: "/",
  },
  {
    icon: "bx bx-menu",
    path: "/menu",
  },
  {
    icon: "bx bxs-info-circle",
    path: "/about",
  },
  {
    icon: "bx bxs-message-dots",
    path: "/contact",
  },
];

const MobileNav = ({ active }) => {
  return (
    <Wrapper>
      <Move active={active} />
      {mobileNav.map((item, index) => (
        <IconItem key={index} active={active === index}>
          <Link to={item.path}>
            <i className={item.icon}></i>
          </Link>
        </IconItem>
      ))}
    </Wrapper>
  );
};

MobileNav.prototype = {
  active: PropTypes.number.isRequired,
};

export default MobileNav;
