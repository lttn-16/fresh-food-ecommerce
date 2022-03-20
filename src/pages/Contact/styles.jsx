import styled from "styled-components";
import tw from "twin.macro";

export const Container = styled.div`
  ${tw`grid px-2 w-full gap-3 laptop:px-4 desktop:px-10 py-3 phone:py-4 laptop:py-6`}
  @media (min-width: 1024px) {
    grid-template-columns: 50% 50%;
  }
`;

export const Wrapper = styled.div`
  ${tw`text-18`}
`;

export const Left = styled.div`
  ${tw``}
`;

export const Right = styled.div`
  ${tw``}
`;

export const Content = styled.span`
  ${tw``}
`;

export const Title = styled.span`
  ${tw`font-bold`}
`;

export const Map = styled.div`
  ${tw`my-2`}
`;

export const Header = styled.div`
  ${tw`mb-2 text-2xl font-bold text-primary`}
`;
