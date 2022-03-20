import styled from "styled-components";
import tw from "twin.macro";

export const Container = styled.div`
  ${tw`w-full my-1`}
`;

export const Input = styled.input`
  ${tw`w-full border border-solid border-grey px-2 py-1.5 rounded-xl my-0.5`}
  ${(props) => props.error && tw`border-error`}
`;

export const Label = styled.label`
  ${tw`block font-semibold text-18`}
`;

export const Error = styled.div`
  ${tw`text-error`}
`;
