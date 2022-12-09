import * as S from './styles';

export type Background = 'primary500' | 'primary50';

export type TemplateProps = {
  image?: string;
  background?: Background;
  children?: React.ReactNode;
};

const LoginTemplate = ({ image, children, background }: TemplateProps) => {
  return (
    <S.Wrapper>
      <S.ContentWrapper>{children}</S.ContentWrapper>

      <S.ImageWrapper background={background}>
        <S.Image src={image} />
      </S.ImageWrapper>
    </S.Wrapper>
  );
};

export default LoginTemplate;
