import styled, { css } from 'styled-components';

export type Props = {
  expandable?: boolean;
  path?: string;
};

export const Wrapper = styled.div`
  display: flex;
  justify-items: center;
`;

export const WrapperContent = styled.main<Props>`
  ${({ expandable }) => css`
    padding: ${expandable ? '0 0 0 27rem' : '0 0 0 8rem'};
  `}

  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 14rem 7.4rem 0;
`;

export const Text = styled.p`
  ${({ theme }) => css`
    margin-top: 1rem;
    text-align: right;
    font-family: ${theme.font.family};
    font-style: normal;
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.small};
    line-height: 1.4;
    color: ${theme.colors.gray500};
  `}
`;

export const UserName = styled.h1`
  ${({ theme }) => css`
    margin-top: 1rem;
    text-align: right;
    font-family: ${theme.font.family};
    font-style: normal;
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.small};
    line-height: 1.4;
    color: ${theme.colors.gray500};
  `}
`;

export const LogoWrapper = styled.div`
  ${({ theme }) => css`
    height: 9.7rem;
    background: ${theme.colors.primary};
    cursor: pointer;
  `}
`;

export const SideMenuExpandable = styled.div<Props>`
  ${({ expandable, theme }) => css`
    width: ${expandable ? '27rem' : '8rem'};
    background: ${theme.colors.whiteFull};
    height: 100vh;
    position: fixed;
    z-index: 99;
  `}

  li {
    list-style-type: none;
  }
`;
