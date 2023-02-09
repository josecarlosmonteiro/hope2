import React, { ReactNode } from "react";
import * as S from "./styles";

interface FlexProps {
  display?: string;
  justify?: string;
  align?: string;
  direction?: string;
  wrap?: string;
  children?: ReactNode;
}

export default function Flex(props: FlexProps) {
  return <S.FlexStyle {...props}>{props.children}</S.FlexStyle>;
}
