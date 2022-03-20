import styled from "styled-components";
import tw from "twin.macro";

export const Container = styled.div`
  ${tw`grid px-2 w-full gap-3 laptop:px-4 desktop:px-10 py-3 phone:py-4 laptop:py-6`}
  @media (min-width: 1024px) {
    grid-template-columns: 30% 70%;
  }
`;

export const CartList = styled.div`
  ${tw`flex flex-col gap-2`}
`;

export const NodataContainer = styled.div`
  ${tw`w-full flex flex-col gap-3 items-center justify-center py-5`}
`;

export const ImgContainer = styled.div`
  ${tw`text-center inline-block`}
`;

export const Img = styled.img`
  ${tw``}
`;

export const NodataTitle = styled.div`
  ${tw`text-center text-xl font-bold`}
`;
