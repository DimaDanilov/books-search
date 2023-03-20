import styled from "styled-components";
import { globalStyles } from "../styles/style";

export const CategoryLink = ({
  link,
  children,
}: {
  link?: string;
  children: React.ReactNode;
}) => <Category href={link || undefined}>{children}</Category>;

const Category = styled.a`
  color: ${globalStyles.colors.grey};
  font-size: ${globalStyles.fonts.a};
`;
