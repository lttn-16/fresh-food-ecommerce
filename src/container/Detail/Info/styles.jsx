import tw from "twin.macro";
import styled from "styled-components";

export const Container = styled.div`
  ${tw`flex flex-col gap-1 phone:gap-2`}
`;

export const Title = styled.div`
  ${tw`text-3xl font-bold`}
`;

export const Price = styled.div`
  ${tw`text-primary font-bold text-2xl`}
`;

export const Wrapper = styled.div`
  ${tw`flex flex-col gap-1`}
`;

export const InfoTitle = styled.div`
  ${tw`font-bold text-xl`}
`;

export const Size = styled.div`
  ${tw`h-5 w-5 uppercase text-xl hover:bg-primary hover:text-white flex items-center justify-center cursor-pointer rounded-[25px] border-2 border-solid border-grey`}
  ${(props) => props.active && tw`bg-primary text-white`}
`;

export const SizeList = styled.div`
  ${tw`flex gap-2`}
`;

export const QuanlityWrapper = styled.div`
  ${tw`flex items-center`}
`;

export const QuanlityNumber = styled.div`
  ${tw`border-solid border-grey border-2 w-10 text-center border-r-0 border-l-0`}
`;

export const QuanlityIcon = styled.div`
  ${tw` border-solid border-grey border-2 px-1 cursor-pointer hover:bg-primary hover:text-white`}
`;

export const ButtonText = styled.div`
  ${tw`text-white text-18`}
`;

export const ButtonWrapper = styled.div`
  ${tw`mt-2 flex gap-2`}
  ${(props) => props.isModal && tw`flex-col`}
`;
