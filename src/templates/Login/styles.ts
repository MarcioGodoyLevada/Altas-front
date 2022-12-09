import styled from 'styled-components';

export type Background = 'primary500' | 'primary50';

type BackgroundProps = {
  background?: Background;
};

export const Wrapper = styled.div`
  background: ${(props) => props.theme.colors.whiteFull};
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 45% 1fr;
  justify-items: center;
`;

export const ContentWrapper = styled.div`
  height: 100%;
  width: 55%;
  padding-top: 10rem;
`;

export const ImageWrapper = styled.div<BackgroundProps>`
  height: 100%;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
