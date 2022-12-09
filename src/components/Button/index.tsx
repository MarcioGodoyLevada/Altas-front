import React from 'react';

import * as S from './styles';

export type ButtonProps = {
  text?: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit';
};

const Button = ({
  text,
  className,
  disabled = false,
  onClick,
  type,
}: ButtonProps) => (
  <S.Button
    type={type}
    className={className}
    disabled={disabled}
    onClick={onClick}
  >
    {text}
  </S.Button>
);

export default Button;
