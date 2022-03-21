import tw from "twin.macro";
import styled from "styled-components";

export const Container = styled.div`
  ${tw`bg-tertiary py-12 phone:py-[140px]`}
`;

export const List = styled.div`
  ${tw`grid grid-cols-1 phone:grid-cols-3 mx-2 laptop:mx-10 gap-3`}
`;

export const Wrapper = styled.div`
  ${tw`px-2 py-4 rounded-3xl bg-white`}
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  @media (min-width: 1024px) {
    ${(props) => props.active && "transform: scale(1.2)"}
  }
`;

export const Comment = styled.div`
  ${tw`text-center laptop:mx-2 text-md`}
`;

export const Content = styled.div`
  ${tw`relative border-b-grey border-b-2 pb-5`}
`;

export const Img = styled.img`
  ${tw`h-6 w-6 rounded-[50%] object-cover absolute -bottom-3 left-1/2`}
  transform: translateX(-50%);
`;

export const Info = styled.div`
  ${tw`text-center pt-5`}
`;

export const Name = styled.div`
  ${tw`font-bold text-18 mb-2`}
`;

export const Rating = styled.div`
  ${tw`text-primary`}
`;
