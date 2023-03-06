import React, {FC} from 'react';
import {ButtonContainer, ButtonStyled} from 'common/components/Button/buttonStyles';

type Props = {
  callback: () => void
  title: string
}

export const Button: FC<Props> = ({callback, title}) => {

  return (
    <ButtonContainer>
      <ButtonStyled onClick={callback}>{title}</ButtonStyled>
    </ButtonContainer>
  );

};

