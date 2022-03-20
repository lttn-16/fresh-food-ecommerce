import tw from "twin.macro";
import styled from "styled-components";

export const Container = styled.div`
  ${tw`py-15 bg-center bg-no-repeat bg-cover`}
`;

export const Wrapper = styled.div`
  ${tw`flex flex-col laptop:flex-row gap-5 justify-between mx-2 laptop:mx-10`}
`;

export const Col = styled.div`
  ${tw``}
`;
export const Nav = styled.div`
  ${tw`cursor-pointer`}
`;

export const Title = styled.div`
  ${tw`font-bold text-primary text-2xl mb-2 w-max`}
`;

export const Text = styled.div`
  ${tw`text-white`}
`;

export const Address = styled.div`
  ${tw`mt-3`}
`;
