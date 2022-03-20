import styled from "styled-components";
import tw from "twin.macro";

export const Container = styled.div`
  ${tw`px-2 w-full text-lg laptop:px-4 desktop:px-10 py-3 phone:py-4 laptop:py-6`}
`;

export const Wrapper = styled.div`
  ${tw`mb-2`}
`;

export const Heading = styled.div`
  ${tw`uppercase text-2xl pb-2 border-b border-solid border-primary font-bold word-spacing[6px] text-primary`}
`;

export const HeadingContent = styled.div`
  ${tw`my-2`}
`;

export const Title = styled.div`
  ${tw`font-medium text-xl text-primary mb-2`}
`;

export const Content = styled.div`
  ${tw``}
`;
