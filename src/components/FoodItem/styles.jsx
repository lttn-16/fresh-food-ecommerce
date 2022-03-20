import tw from "twin.macro";
import styled from "styled-components";

export const Container = styled.div`
  ${tw`h-full flex flex-col gap-4 rounded-3xl pb-3 cursor-pointer`}
  transition: .4s ease-in-out;
  &:hover {
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
      rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  }
`;

export const ImgWrapper = styled.div`
  ${tw`overflow-hidden w-full h-28 rounded-3xl`}
`;

export const Img = styled.img`
  ${tw`w-full h-full rounded-3xl`}
  transition: .5s ease-in-out;
  &:hover {
    transform: scale(2) rotate(45deg);
  }
`;

export const Info = styled.div`
  ${tw`flex items-center justify-between mx-2`}
`;

export const InfoLeft = styled.div`
  ${tw``}
`;

export const InfoRight = styled.div`
  ${tw`text-2xl text-primary py-0.1 px-1 hover:text-white hover:bg-primary hover:rounded-2xl`}
  transition: .5s ease-in-out;
`;

export const Title = styled.div`
  ${tw`text-grey font-bold text-xl`}
`;

export const Price = styled.div`
  ${tw`text-lg `}
`;
