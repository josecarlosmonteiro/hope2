import styled from "styled-components";

const fontSizeMap: Record<string, string> = {
  title: "3rem",
  subtitle: "2rem",
  body: "1rem",
};

interface TypographyStylesProps {
  variant?: string;
}

export const Typography = styled.div<TypographyStylesProps>`
  font-weight: 300;
  font-size: ${(props) =>
    props.variant ? fontSizeMap[props.variant] : fontSizeMap.body};
`;
