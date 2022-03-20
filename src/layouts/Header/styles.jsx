import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  ${tw`bg-tertiary py-2 shadow-nav w-full fixed top-0 left-0 z-100`}
`;

export const Container = styled.div`
  ${tw`flex items-center justify-between px-2 laptop:px-4 desktop:px-10 `}
`;

export const Menu = styled.div`
  ${tw`laptop:flex gap-4 text-grey font-semibold hidden `}
`;

export const Logo = styled.div`
  ${tw`text-primary text-2xl font-extra-bold`}
`;

export const MenuItem = styled.div`
  ${tw`px-2 py-1 hover:text-white hover:bg-primary hover:rounded-2xl`}
  ${(props) => props.active && tw`text-white bg-primary rounded-2xl`}
  transition: .5s ease-in-out;
`;

export const IconList = styled.div`
  ${tw`flex items-center gap-0.5 `}
`;

export const IconItem = styled.div`
  ${tw`text-2xl text-primary py-0.1 px-1 hover:text-white hover:bg-primary hover:rounded-2xl`}
  transition: .5s ease-in-out;
`;

export const LinkTo = styled(Link)`
  ${tw`relative top-0.2`}
`;

export const Bagde = styled.div`
  ${tw`absolute -top-0.2 text-sm w-2 h-2 text-center rounded-[50%] text-white bg-error-light -right-1`}
`;
