import styled from "styled-components";

interface FlexStyleProps {
  display?: string;
  justify?: string;
  align?: string;
}

export const FlexStyle = styled.div<FlexStyleProps>`
  display: ${(props) => props.display || "flex"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "flex-start"};
`;
