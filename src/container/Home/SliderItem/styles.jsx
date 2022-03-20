import tw from "twin.macro";
import styled from "styled-components";

export const Container = styled.div`
  ${tw`pl-2 flex flex-col-reverse laptop:flex-row laptop:pl-4 desktop:pl-10 items-center`}
`;

export const Info = styled.div`
  ${tw`w-full laptop:w-1/2 overflow-hidden`}
`;

export const Title = styled.h2`
  ${tw`laptop:text-title text-[60px] capitalize font-extra-bold text-white`}
`;

export const Description = styled.div`
  ${tw`text-white laptop:text-18 text-lg overflow-hidden`}
`;

export const Text = styled.p`
  ${tw``}
`;

export const ButtonText = styled.div`
  ${tw`font-bold uppercase laptop:text-xl text-lg`}
`;

export const ImgWrapper = styled.div`
  ${tw`w-full laptop:w-1/2`}
`;

export const Img = styled.img`
  ${tw`laptop:absolute left-[680px] -bottom-27 object-cover z-50`}
  width: calc(40% + 500px);
`;
