import styled, { css } from 'styled-components';

export const HeadingContainer = styled.div`
  color: ${props => props.theme.colors.primary700};
  margin-top: 3.6rem;
`;

export const TextContainer = styled.div`
  ${({ theme }) => css`
    font-family: ${theme.font.family};
    font-style: italic;
    color: ${theme.colors.gray500};
    width: 48rem;
    margin-bottom: 1.6rem;
  `}
`;

export const InputContainer = styled.div`
  ${({ theme }) => css`
    margin: 0.8rem 0 2.4rem;
    .email {
      font-family: ${theme.font.family};
      margin-top: 2.4rem;
    }

    .password {
      font-family: ${theme.font.family};
      padding-top: 0.8rem;
    }
  `}
`;

export const ErrorMessage = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.error};
    font-family: ${theme.font.family};
    font-style: italic;
    font-weight: normal;
    font-size: ${theme.font.sizes.small};
    text-align: end;
  `}
`;

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    margin: 0.4rem 0 -0.4rem -0.4rem;
    .button {
      width: 100%;
      font-size: 1.6rem;

      &:hover {
        background-color: ${theme.colors.primary};
        border-color: ${theme.colors.primary};
        opacity: 75%;
      }

      &:focus {
        background-color: ${theme.colors.primary};
        border-color: ${theme.colors.primary};
      }
    }
  `}
`;

export const RecoverContainer = styled.div`
  ${({ theme }) => css`
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.normal};
    font-style: normal;
    color: ${props => props.theme.colors.gray500};
    margin-top: 0.8rem;
    display: flex;
    justify-content: right;
    align-items: center;
    gap: 0.4rem;
  `}
`;


