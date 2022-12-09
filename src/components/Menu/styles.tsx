import styled, { css } from 'styled-components';
import { MenuProps } from '.';

const modifiers = {
  expandable: () => css`
    display: flex;
    align-items: flex-end;
    margin-left: 22rem;
  `,
};

export const Link = styled.a<MenuProps>`
  ${({ path, theme }) => css`
    text-decoration: none;
    cursor: pointer;
    display: block;
    padding: 1.2rem 3.2rem;
    color: ${theme.colors.primary};

    :hover,
    :focus {
      color: ${theme.colors.primary};
    }
  `};
`;

export const Logout = styled.div<MenuProps>`
  ${({ theme }) => css`
    border-top: 2px solid ${theme.colors.gray50};
    width: 100%;
    position: absolute;
    bottom: 1rem;
  `}
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.6rem 0 0;
`;

export const Icon = styled.svg<MenuProps>`
  ${({ expandable, theme }) => css`
    align-items: center;
    color: ${theme.colors.primary};
    width: 2.4rem;
    margin-bottom: 2.8rem;
    cursor: pointer;

    ${expandable && modifiers.expandable()}

    :hover,
    :focus {
      background: ${(props) => props.theme.colors.gray50};
      border-radius: 0.5rem;
  `}
`;
