import tw from "twin.macro";
import styled, { css } from "styled-components";

export const Container = styled.div`
  ${tw`py-[7px] px-3.5 font-semibold text-sm phone:text-lg border border-solid border-primary w-max text-primary hover:text-white hover:bg-primary cursor-pointer transition duration-500 ease-in-out`}
  ${(props) =>
    props.type === "secondary" &&
    tw`text-white bg-primary shadow-nav py-1 px-5 laptop:px-8 laptop:py-1.5 rounded-3xl`}
  
  ${(props) =>
    props.type === "secondary" &&
    css`
      &:hover {
        transform: translateY(-1rem);
      }
    `}

  ${(props) =>
    props.type === "primary" && tw`bg-primary text-white hover:opacity-80`}
`;
