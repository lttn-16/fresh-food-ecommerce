import tw from "twin.macro";
import styled from "styled-components";

export const Container = styled.div`
  ${tw`px-2 w-full laptop:px-4 desktop:px-10 py-3 phone:py-4 laptop:py-6`}
`;

export const Top = styled.div`
  ${tw`flex flex-col gap-2 laptop:flex-row phone:gap-5`}
`;

export const Wrapper = styled.div`
  ${tw`w-full laptop:w-[60%]`}
`;

export const Bottom = styled.div`
  ${tw``}
`;

export const BottomTitle = styled.div`
  ${tw`font-bold text-mxl text-center my-5`}
`;

export const ProductList = styled.div`
  ${tw`grid grid-cols-1 phone:grid-cols-2 laptop:grid-cols-4 gap-3`}
`;
