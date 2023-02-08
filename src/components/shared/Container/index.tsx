import React, { ReactNode } from "react";
import * as S from "./styles";

interface ContainerProps {
  children?: ReactNode;
}

export default function Container(props: ContainerProps) {
  return <S.Container>{props.children}</S.Container>;
}
