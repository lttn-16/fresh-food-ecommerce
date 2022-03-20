import tw from "twin.macro";
import styled from "styled-components";

export const Container = styled.div`
  ${tw`w-full`}
`;

export const Title = styled.div`
  ${tw`font-bold text-xl my-3`}
`;

export const Wrapper = styled.div`
  ${tw`overflow-hidden relative`}
`;

export const Descritpion = styled.div`
  ${tw`h-25`}
  ${(props) => props.expand && "height: max-content;"}
`;

export const Button = styled.div`
  ${tw`py-[7px] bg-primary absolute bottom-0 left-1/2 px-2.5 font-semibold text-sm phone:text-lg cursor-pointer w-max text-primary transition duration-500 ease-in-out`}
  transform: translateX(-50%);
  ${(props) => props.expand && tw`relative mt-2`}
`;

export const ButtonText = styled.div`
  ${tw`text-white`}
`;
