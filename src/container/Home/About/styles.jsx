import tw from "twin.macro";
import styled from "styled-components";

export const Container = styled.div`
  ${tw`overflow-hidden bg-tertiary py-[180px] laptop:py-12 px-2 laptop:px-4 desktop:px-10`}
`;

export const ImgWrapper = styled.div`
  ${tw`w-7/12 relative`}
`;

export const Img = styled.img`
  ${tw`rounded-35 min-h-20`}
  box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px,
        rgba(17, 17, 26, 0.1) 0px 16px 56px,
        rgba(17, 17, 26, 0.1) 0px 24px 80px;
`;

export const Info = styled.div`
  ${tw`absolute top-1/2 laptop:left-3/4 left-2/3 bg-white rounded-35 laptop:py-6 laptop:px-7 w-full px-2 py-4 flex flex-col justify-center laptop:w-8/12 text-center h-[380px] phone:h-unset`}
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  transform: translateY(-50%);
`;

export const Title = styled.div`
  ${tw`text-grey text-xl laptop:text-3xl font-bold mb-2 phone:mb-4`}
`;

export const TitleGreen = styled.span`
  ${tw`text-primary`}
`;

export const Description = styled.div`
  ${tw`overflow-hidden overflow-ellipsis`}
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
`;
