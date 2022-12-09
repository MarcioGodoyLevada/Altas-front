import styled, { css, DefaultTheme } from 'styled-components';
import { InputTextProps, IconProps } from '.';

type ContainerProps = {
  error: boolean;
  hasValue: boolean;
};

const modifiers = {
  error: (theme: DefaultTheme) => css`
    ${Label},
    ${IconWrapper}, 
    ${Input} {
      color: ${theme.colors.error};
    }

    ${InputWrapper} {
      border-color: ${theme.colors.error};

      &:focus,
      &:focus-within,
      &:active {
        border-color: ${theme.colors.error};
      }
    }

    ${IconWrapper} {
      cursor: default;
    }
  `,

  floatingLabel: (theme: DefaultTheme, error: boolean) => css`
    font-size: ${theme.font.sizes.xmedium};
    background-image: linear-gradient(
      ${theme.colors.background500},
      ${theme.colors.white}
    );
    transform: scale(0.75) translate(1rem, -170%);

    ${error && modifiers.error(theme)};
  `,
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  width: 100%;
`;

export const Container = styled.div<ContainerProps>`
  ${({ theme, error, hasValue }) => css`
    position: relative;
    color: ${theme.colors.primary};

    ${error && modifiers.error(theme)};

    ${Label} {
      ${hasValue && modifiers.floatingLabel(theme, !!error)};
    }

    &:focus-within ${Label} {
      ${modifiers.floatingLabel(theme, !!error)}
    }

    &:focus,
    &:focus-within,
    &:active {
      ${Label} {
        color: ${theme.colors.primary};
      }
    }
  `}
`;

export const InputWrapper = styled.div<InputTextProps>`
  ${({ theme }) => css`
    height: ${theme.input.sizes};
    border: ${theme.border.thickness} solid ${theme.colors.gray300};
    border-radius: ${theme.border.radius};
    display: flex;
    align-items: center;

    &:focus,
    &:focus-within,
    &:active {
      border-color: ${theme.colors.tertiary};
      box-shadow: '0px 0px 0px 4px rgba(99, 131, 123, 0.2)';
    }
  `}
`;

export const Input = styled.input<InputTextProps>`
  ${({ theme, icon }) => css`
    background-color: ${theme.colors.background500};
    border: 0;
    border-radius: ${theme.border.radius};
    color: ${theme.colors.gray500};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding-right: ${icon ? theme.spacings.xxlarge : theme.spacings.xsmall};
    padding-left: ${theme.spacings.xsmall};
    outline: none;
    width: 100%;
    height: 100%;

    &::placeholder {
      color: ${theme.colors.gray500};
    }
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    background-color: transparent;
    color: ${theme.colors.gray500};
    display: inline-block;
    font-size: ${theme.font.sizes.medium};
    font-family: ${theme.font.family};
    line-height: 1.3;
    padding: 0 ${theme.spacings.xxsmall};
    position: absolute;
    top: 50%;
    transform: scale(1) translate(1rem, -50%);
    transition: ${theme.transition.fast};
  `}
`;

export const IconWrapper = styled.div<IconProps>`
  ${({ theme }) => css`
    position: absolute;
    color: ${theme.colors.gray500};
    height: min-content;
    width: 2.2rem;
    right: ${theme.spacings.xsmall};
    cursor: pointer;
  `}
`;

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.error};
    font-size: ${theme.font.sizes.small};
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    position: absolute;
    margin-top: 0.4rem;
    text-align: justify;

    #link {
      padding-left: 0.5rem;
    }
  `}
`;

export const Text = styled.span`
  ${({ theme }) => css`
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.secondary};
  `}
`;
