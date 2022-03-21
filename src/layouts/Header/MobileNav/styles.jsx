import styled from "styled-components";
import tw from "twin.macro";
import { Link as _Link } from "react-router-dom";

export const Wrapper = styled.div`
  ${tw`w-full z-100 fixed bottom-0 left-0 bg-white laptop:hidden flex overflow-hidden justify-between rounded-t-3xl shadow-nav-mobile`}
`;

export const Move = styled.div`
  ${tw`absolute -z-1 w-1/4 h-full bg-primary left-0`}
  transition: .5s ease-in-out;
  ${(props) => `left: calc(${props.active} * 25%);`}
`;

export const IconItem = styled.div`
  ${tw`text-xl flex items-center justify-center  flex-auto py-1 text-grey`}
  transition: .5s ease-in-out;
  ${(props) => props.active && tw`text-white`}
`;

export const Link = styled(_Link)`
  ${tw`relative top-0.2`}
`;
