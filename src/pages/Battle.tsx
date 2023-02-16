import React from "react";

import * as S from "../components/shared/Grid/style";
import { CharName } from "../components/shared/Typography/styles";

export default function Battle() {
  const playerData = {
    general: {
      vida: 100,
      mana: 100,
      stamina: 100,
    },
    battle: {
      ataque: 10,
      defesa: 10,
      "ataque mag": 10,
      "defesa mag": 10,
      critico: 10,
      esquiva: 10,
    },
  };

  const renderStatLine = (obj: Object) =>
    Object.entries(obj).map(([key, value]) => (
      <S.DataItem key={key}>
        <div>{key}</div>
        <div>{value}</div>
      </S.DataItem>
    ));

  return (
    <S.Grid>
      <S.GridItem>
        <CharName>Char Name</CharName>
        <hr />
        {renderStatLine(playerData.general)}
        <br />
        {renderStatLine(playerData.battle)}
      </S.GridItem>
      <S.GridItem>salve</S.GridItem>
    </S.Grid>
  );
}
