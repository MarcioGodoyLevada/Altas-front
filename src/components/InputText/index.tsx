import React from 'react';

import * as S from './styles';

export type IconProps = {
  icon?: React.ReactElement;
  iconClick?: () => void;
};

export type InputTextProps = {
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: 'text' | 'password';
  value?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  autoFocus?: boolean;
  required?: boolean;
  errorMessage?: string;
  href?: string;
  text?: string;
  maxLength?: number;
} & IconProps;

const InputText = ({
  className,
  onChange,
  name,
  label,
  placeholder,
  value,
  icon,
  autoFocus,
  errorMessage,
  type = 'text',
  href,
  text,
  maxLength,
  iconClick,
  ...props
}: InputTextProps) => {
  return (
    <S.Wrapper className={className}>
      <S.Container error={!!errorMessage} hasValue={!!value || !!placeholder}>
        {!!label && <S.Label htmlFor={name}>{label}</S.Label>}

        <S.InputWrapper>
          <S.Input
            type={type}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            icon={icon}
            name={name}
            autoFocus={autoFocus}
            maxLength={maxLength}
            {...(label ? { id: name } : {})}
            {...props}
          />

          {!!icon && !errorMessage && (
            <S.IconWrapper onClick={iconClick}>{icon}</S.IconWrapper>
          )}
        </S.InputWrapper>

        {!!errorMessage && <S.Error>{errorMessage}</S.Error>}
      </S.Container>
    </S.Wrapper>
  );
};

export default InputText;
