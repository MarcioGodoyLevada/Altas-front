import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    border-color: ${theme.colors.primary};
    color: ${theme.colors.whiteFull};
    border-style: solid;
    border-width: 1px;
    cursor: pointer;
    font-family: ${theme.font.family};
    outline: none;
    padding: ${theme.spacings.small} ${theme.spacings.large};
    font-size: ${theme.font.sizes.small};
    border-radius: ${theme.border.radius};

    &:hover,
    &:focus {
      background-color: ${theme.colors.primary700};
      border-color: ${theme.colors.primary700};
      box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
        0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
      color: ${theme.colors.whiteFull};
    }

    &:active {
      background-color: ${theme.colors.whiteFull};
      color: ${theme.colors.primary700};
    }

    &[disabled] {
      color: ${theme.colors.gray500};
      background-color: ${theme.colors.gray50};
      border-color: ${theme.colors.gray50};
      pointer-events: none;
      opacity: 0.7;
    }
  `};
`;
