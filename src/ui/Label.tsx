import styled from "styled-components";
import { IChildrenProps } from "../models/ChildrenProps";
import { globalStyles } from "../styles/style";

export const Label = ({ children, ...props }: IChildrenProps) => {
  return <StyledLabel {...props}>{children}</StyledLabel>;
};

const StyledLabel = styled.label`
  color: ${globalStyles.colors.white};
  display: flex;
  align-items: center;
  white-space: nowrap;
`;
