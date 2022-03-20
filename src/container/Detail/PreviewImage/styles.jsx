import tw from "twin.macro";
import styled from "styled-components";

export const Container = styled.div`
  ${tw`flex gap-3 laptop:gap-5`}
`;

export const Left = styled.div`
  ${tw`flex flex-col gap-3`}
`;

export const Img = styled.img`
  ${tw`cursor-pointer w-[160px] h-[150px] `}
`;

export const Right = styled.div`
  ${tw`w-[630px] h-40 laptop:h-50 flex-auto`}
`;

export const Prview = styled.img`
  ${tw`w-full h-full`}
`;
