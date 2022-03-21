import styled from "styled-components";
import tw from "twin.macro";

export const LabelWrapper = styled.div`
  ${tw`flex items-center justify-center w-2 h-2 phone:w-3 phone:h-3 select-none rounded border border-grey cursor-pointer hover:text-white hover:bg-primary`}
`;
