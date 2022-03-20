import styled from "styled-components";
import tw from "twin.macro";

export const Wrapper = styled.div`
  ${tw`relative`}
`;

export const MainWrapper = styled.div`
  ${tw`mt-8`}
`;

export const Button = styled.a`
  ${tw`bg-primary hidden rounded-[10px] text-3xl laptop:flex items-center justify-center p-1 hover:opacity-80 text-white w-max cursor-pointer fixed bottom-5 right-5 z-10`}
`;
