import styled, { css, DefaultTheme } from 'styled-components';
import { MenuItemProps } from '.';

const modifiers = {
  disabled: () => css`
    box-shadow: 0 0.4rem 1.2rem #00000029;
    opacity: 0.5;
    cursor: not-allowed;
  `,

  hoverFocus: () => css`
    :hover,
    :focus {
      background: ${(props) => props.theme.colors.gray50};
      border-radius: 0.5rem;

      p {
        color: ${(props) => props.theme.colors.primary700};
      }
    }
  `,

  expanded: (theme: DefaultTheme) => css`
    border-radius: 0.5rem;
    background: ${theme.colors.gray50};

    p {
      color: ${(props) => props.theme.colors.primary700};
    }
  `,
};

export const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.colors.whiteFull};
  border-radius: 0.5rem;
  margin: 1.2rem;
`;

export const Item = styled.div<MenuItemProps>`
  ${({ disabled, expanded, expandable, theme, path }) => css`
    height: 5rem;
    padding: ${expandable ? '2.8rem' : '1rem'};
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: ${expandable ? 'flex-start' : 'center'};

    p {
      margin: 0 1.6rem 0;
      color: ${theme.colors.gray500};
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
    }

    div {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }

    ${disabled && modifiers.disabled()}
    ${!disabled && modifiers.hoverFocus()}
    ${expanded && modifiers.expanded(theme)}
  `}
`;
