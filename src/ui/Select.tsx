import styled from "styled-components";
import { IChildrenProps } from "../models/ChildrenProps";
import { globalStyles } from "../styles/style";

export const Select = ({ children, ...props }: IChildrenProps) => {
  return <StyledSelect {...props}>{children}</StyledSelect>;
};

const StyledSelect = styled.select`
  width: 100%;
  height: ${globalStyles.form.formInputHeight};
`;
