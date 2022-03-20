import styled from "styled-components";
import tw from "twin.macro";

export const LabelWrapper = styled.div`
  ${tw`flex items-center justify-center w-3 h-3 phone:w-4 phone:h-4 select-none rounded border border-grey cursor-pointer hover:text-white hover:bg-primary`}
`;
