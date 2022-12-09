import styled, { css } from 'styled-components';

export const Card = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    background-color: ${theme.colors.white};
    border-color: ${theme.colors.primary};
    color: ${theme.colors.black};
    border-style: solid;
    border-width: 1px;
    font-family: ${theme.font.family};
    outline: none;
    padding: ${theme.spacings.small} ${theme.spacings.large};
    font-size: ${theme.font.sizes.small};
    border-radius: ${theme.border.radius};
    min-width: 20rem;
    min-height: 10rem;
    box-shadow: 3px 4px 5px #191970

  `};
`;

export const WrapperFriend = styled.div`
  display: flex;
  flex-direction: column;
  gap:1rem;
  width: 100%;
`;

export const WrapperAddress = styled.div`
  display: flex;
  flex-direction: column;
  gap:1rem;
  width: 100%;
`;
