import styled from "styled-components";
import { globalStyles } from "../styles/style";

export const Category = ({ children }: { children: React.ReactNode }) => (
  <CategoryText>{children}</CategoryText>
);

const CategoryText = styled.p`
  color: ${globalStyles.colors.grey};
  font-size: ${globalStyles.fonts.p};
  text-decoration: underline;
`;
