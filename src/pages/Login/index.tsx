import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { useSession } from '../../contexts/session';

import LoginTemplate from '../../templates/Login';
import login from '../../assets/images/login.png';

import * as S from './styles';
import InputText from '../../components/InputText';
import InputPassword from '../../components/InputPassword';
import Button from '../../components/Button';
import { FriendService } from '../../services/friend';
import { useNavigate } from 'react-router-dom';

function Login() {
  const { signin } = useSession();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: Yup.object({
      email: Yup.string()
        .email('* E-mail inválido.')
        .required('* Campos obrigatórios.'),
      password: Yup.string().required('* Campos obrigatórios.'),
    }),
    onSubmit: async (values) => {
      try {
        const ola = await FriendService.getFriend();
        console.log(ola);

        await signin(values.email, values.password);
      } catch (error) {
        formik.setFieldError('password', ' ');
        setError('* Ops! Usuário ou senha incorretos.');
      }
    },
  });

  return (
    <LoginTemplate image={login}>
      <form onSubmit={formik.handleSubmit}>
        <S.HeadingContainer>
          <h2>{'Oi! Vamos começar?'}</h2>
        </S.HeadingContainer>

        <S.InputContainer>
          <InputText
            className="email"
            type="text"
            name="email"
            label="E-mail de usuário"
            value={formik.values.email}
            onChange={formik.handleChange}
            errorMessage={formik.errors.email}
            maxLength={255}
          />
        </S.InputContainer>

        <S.InputContainer>
          <InputPassword
            className="password"
            type="password"
            name="password"
            label="Insira a sua senha"
            value={formik.values.password}
            onChange={formik.handleChange}
            errorMessage={formik.errors.password}
            maxLength={40}
          />
        </S.InputContainer>

        <S.ErrorMessage>{error}</S.ErrorMessage>

        <S.ButtonContainer>
          <Button text="Fazer login" className="button" type="submit" />
     
          <Button
            text="Criar user"
            className="button"
            type="button"
            onClick={() => navigate('/user')}
          />
        </S.ButtonContainer>
      </form>
    </LoginTemplate>
  );
}

export default Login;
