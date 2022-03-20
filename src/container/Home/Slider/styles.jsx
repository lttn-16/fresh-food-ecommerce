import tw from "twin.macro";
import styled from "styled-components";

export const Container = styled.div`
  ${tw`relative overflow-hidden pt-2 pb-15 laptop:py-12 bg-no-repeat bg-fixed w-full bg-center bg-cover bg-blend-darken bg-overplay`}
`;

export const Control = styled.div`
  ${tw`flex absolute z-50 laptop:bottom-2 laptop:left-1/2 gap-2.5 bottom-0.1 right-1 laptop:right-unset`}
  @media (min-width: 1024px) {
    transform: translateX(-50%);
  }
`;

export const ControlItem = styled.div`
  ${tw`w-7 h-7 cursor-pointer transition duration-500 ease-in-out`}
  &:hover {
    transform: translateY(-20px) rotate(10deg);
  }
`;

export const ControlImg = styled.img`
  ${tw``}
`;
