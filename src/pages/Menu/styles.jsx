import tw from "twin.macro";
import styled from "styled-components";

export const Container = styled.div`
  ${tw`px-2 w-full relative justify-between laptop:grid laptop:px-4 desktop:px-10 py-3 phone:py-4 laptop:py-6`}
  grid-template-columns: 20% 80%;
`;

export const Wrapper = styled.div`
  ${tw``}
`;

export const SideBarWrapper = styled.div`
  ${tw`absolute top-0 left-0 bg-white h-full z-50 px-2 w-[180px] transition duration-500 ease-in-out`}
  transform: translateX(-100%);
  ${(props) => props.expand && "transform: translateX(0);"}
  ${tw`laptop:static`}
  @media (min-width: 1024px) {
    transform: translateX(0);
  }
`;

export const DataWrapper = styled.div`
  ${tw`grid grid-cols-1  phone:grid-cols-2 laptop:grid-cols-3 gap-3 laptop:gap-5`}
`;

export const Backdrop = styled.div`
  ${tw`fixed laptop:hidden top-0 left-0 right-0 z-40 w-full h-full bg-[#000] opacity-60`}
  transform: translateX(-100%);
  ${(props) => props.expand && "transform: translateX(0);"}
`;
