import React, { ReactNode } from "react";
import * as S from "./styles";

interface TypographyProps {
  variant?: "title" | "body" | "subtitle";
  children?: ReactNode;
}

export default function Typography(props: TypographyProps) {
  const { children } = props;

  return <S.Typography {...props}>{children}</S.Typography>;
}
