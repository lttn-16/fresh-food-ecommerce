import tw from "twin.macro";
import styled from "styled-components";

export const Wrapper = styled.label`
  ${tw`form-check-input flex items-center gap-1`}
`;

export const Label = styled.label`
  ${tw`form-check-label inline-block text-grey`}
`;

export const Input = styled.input`
  ${tw`form-check-input appearance-none h-[18px] w-[18px] border rounded-sm bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200 bg-no-repeat bg-center bg-contain cursor-pointer`}
`;
