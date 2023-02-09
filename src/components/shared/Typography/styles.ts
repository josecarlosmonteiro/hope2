import styled from "styled-components";

interface TypographyStylesProps {
  variant?: string;
}

const fontSizeMap: Record<string, number> = {
  title: 3,
  subtitle: 2,
  body: 1,
};

export const Typography = styled.div<TypographyStylesProps>`
  margin: 0.5rem 0;
  font-weight: 300;
  font-size: ${({ variant }) =>
    (variant ? fontSizeMap[variant] : fontSizeMap.body) + "rem"};
`;
