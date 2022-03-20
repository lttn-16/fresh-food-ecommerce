import styled from "styled-components";
import tw from "twin.macro";

export const Container = styled.div`
  ${tw`text-18 flex flex-col gap-1.5 p-2`}
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  height: max-content;
`;

export const Title = styled.div`
  ${tw``}
`;

export const Price = styled.div`
  ${tw`text-primary font-bold text-24`}
`;

export const PriceWrapper = styled.div`
  ${tw`flex justify-between`}
`;

export const Button = styled.div`
  ${tw`w-full text-center bg-primary py-1 hover:opacity-80 cursor-pointer font-semibold text-white uppercase`}
`;
