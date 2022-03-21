import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import MobileNav from "./MobileNav";

import {
  Container,
  Menu,
  MenuItem,
  IconList,
  Wrapper,
  IconItem,
  Logo,
  LinkTo,
  Bagde,
} from "./styles";

const mainNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Menu",
    path: "/menu",
  },
  {
    display: "About",
    path: "/about",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  const { pathname } = useLocation();
  const cartItems = useSelector((state) => state.cart.value);
  const [cartItem, setCartItem] = useState(cartItems.length);

  const activeNav = mainNav.findIndex((e) => e.path === pathname);

  useEffect(() => {
    setCartItem(cartItems.length);
  }, [cartItems]);

  return (
    <>
      <Wrapper>
        <Container>
          <Link to="/">
            <Logo>Freshfood</Logo>
          </Link>

          <Menu>
            {mainNav.map((item, index) => (
              <MenuItem key={index} active={activeNav === index}>
                <Link to={item.path}>
                  <span> {item.display}</span>
                </Link>
              </MenuItem>
            ))}
          </Menu>

          <IconList>
            <IconItem>
              <LinkTo to="/">
                <i className="bx bx-search"></i>
              </LinkTo>
            </IconItem>
            <IconItem>
              <LinkTo to="/cart">
                <i className="bx bx-cart-alt relative"></i>
                {cartItem > 0 && <Bagde>{cartItem}</Bagde>}
              </LinkTo>
            </IconItem>
            <IconItem>
              <LinkTo to="/">
                <i className="bx bx-user"></i>
              </LinkTo>
            </IconItem>
          </IconList>
        </Container>
      </Wrapper>
      <MobileNav active={activeNav} />
    </>
  );
};

export default Header;
