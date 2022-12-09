import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import LoginTemplate from '../../templates/Login';
import login from '../../assets/images/login.png';

import * as S from './styles';
import InputText from '../../components/InputText';
import InputPassword from '../../components/InputPassword';
import Button from '../../components/Button';
import { UserService } from '../../services/user';
import { useNavigate } from 'react-router-dom';

function User() {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: Yup.object({
      name: Yup.string().required('* Campos obrigatórios.'),
      email: Yup.string()
        .email('* E-mail inválido.')
        .required('* Campos obrigatórios.'),
      password: Yup.string().required('* Campos obrigatórios.'),
    }),
    onSubmit: async (values) => {
      try {
        await UserService.postUser(values.name, values.email, values.password);

        navigate('/user');
      } catch (error) {
        setError('Ops!');
      }
    },
  });

  return (
    <LoginTemplate image={login}>
      <form onSubmit={formik.handleSubmit}>
        <S.HeadingContainer>
          <h2>{'Crie seu usuario'}</h2>
        </S.HeadingContainer>

        <S.InputContainer>
          <InputText
            className="name"
            type="text"
            name="name"
            label="Nome do usuário"
            value={formik.values.name}
            onChange={formik.handleChange}
            errorMessage={formik.errors.name}
            maxLength={255}
          />
        </S.InputContainer>
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
          <Button text="Criar" className="button" type="submit" />
        </S.ButtonContainer>
      </form>
    </LoginTemplate>
  );
}

export default User;
