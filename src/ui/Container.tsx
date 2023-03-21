import styled from "styled-components";
import { IChildrenProps } from "../models/ChildrenProps";

export const Container = ({ children, ...props }: IChildrenProps) => {
  return <StyledContainer {...props}>{children}</StyledContainer>;
};

const StyledContainer = styled.div`
  width: 95%;
  margin: 0 auto;
`;
