import styled from "styled-components";
import tw from "twin.macro";

export const Container = styled.div`
  ${tw`w-full grid gap-2`}
  grid-template-columns: auto auto;
  height: max-content;
`;

export const Wrapper = styled.div`
  ${tw`flex items-center gap-1`}
`;

export const WrapperInfo = styled.div`
  ${tw`flex flex-col laptop:flex-row laptop:items-center gap-1 laptop:gap-6 `}
`;

export const Img = styled.img`
  ${tw`h-13 w-13`}
`;

export const Title = styled.div`
  ${tw`text-lg hover:text-primary`}
  @media (min-width: 1024px) {
    flex-grow: 1;
  }
`;

export const Price = styled.div`
  ${tw`text-lg`}
`;

export const QuanlityWrapper = styled.div`
  ${tw`flex items-center`}
`;

export const QuanlityNumber = styled.div`
  ${tw`border-solid border-grey border-2 w-8  text-center border-r-0 border-l-0`}
`;

export const QuanlityIcon = styled.div`
  ${tw` border-solid border-grey border-2 px-1 cursor-pointer hover:bg-primary hover:text-white`}
`;

export const Delete = styled.div`
  ${tw`text-lg hover:text-primary cursor-pointer`}
`;
