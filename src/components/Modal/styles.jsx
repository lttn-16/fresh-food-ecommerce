import styled from "styled-components";
import tw from "twin.macro";

export const Container = styled.div`
  ${tw`fixed w-full h-full left-0 top-0 overflow-auto invisible opacity-0`}
  z-index: 200;
  ${(props) => props.expand && tw`visible opacity-100`}
`;

export const Content = styled.div`
  ${tw`m-auto relative flex bg-white flex-col gap-2 p-5 laptop:flex-row phone:gap-5 w-full laptop:w-[60%] transition ease-in-out duration-700`}
  transform: translateY(-100%);
  ${(props) => props.expand && "transform: translateY(0);"}
`;

export const Wrapper = styled.div`
  ${tw`w-full laptop:w-[60%]`}
`;

export const ButtonWrapper = styled.div`
  ${tw`absolute top-0 right-0`}
`;

export const Button = styled.div`
  ${tw`hover:opacity-80 cursor-pointer p-1 px-1.5 font-bold bg-primary text-white`}
`;

export const Backdrop = styled.div`
  ${tw`fixed top-0 left-0 right-0 -z-1 w-full h-full bg-[#000] opacity-60`}
  transform: translateX(-100%);
  ${(props) => props.expand && "transform: translateX(0);"}
`;
