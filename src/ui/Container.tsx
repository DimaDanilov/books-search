import styled from "styled-components";

export const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => <StyledContainer className={className}>{children}</StyledContainer>;

const StyledContainer = styled.div`
  width: 95%;
  margin: 0 auto;
`;
