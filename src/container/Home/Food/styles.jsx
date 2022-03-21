import tw from "twin.macro";
import styled from "styled-components";

export const Container = styled.div`
  ${tw`bg-no-repeat bg-center bg-fixed bg-cover py-2 phone:py-4`}
`;

export const Wrapper = styled.div`
  ${tw` my-10 laptop:m-10 flex flex-col gap-3 bg-white rounded-3xl px-2 py-5 laptop:py-6 laptop:px-4`}
`;

export const Title = styled.div`
  ${tw`text-grey laptop:text-24 font-bold text-center text-2xl`}
`;

export const TitleGreen = styled.span`
  ${tw`text-primary`}
`;

export const Description = styled.span`
  ${tw`text-center text-sm phone:text-md`}
`;

export const ButtonWrapper = styled.div`
  ${tw`flex phone:gap-3 gap-1.5 overflow-auto mb-3`}
`;

export const Button = styled.div`
  ${tw`py-[7px] px-3.5 font-semibold text-sm phone:text-md border border-solid rounded-2xl border-primary w-max text-primary hover:text-white hover:bg-primary cursor-pointer transition duration-500 ease-in-out`}
  ${(props) => props.active && tw`bg-primary text-white`}
`;

export const FoodList = styled.div`
  ${tw`grid grid-cols-2 laptop:grid-cols-4 gap-2`}
`;
