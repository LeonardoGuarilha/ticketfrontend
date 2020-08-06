import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { Container, HeaderTitle, Content, MainContent } from './styles';
import getValidationErros from '../../utils/getValidationErrors';

import * as Yup from 'yup';

import { Link, useHistory } from 'react-router-dom';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { FiMail, FiLock } from 'react-icons/fi';
import { useAuth } from '../../hooks/auth';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const { signIn } = useAuth();
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrogatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });

        history.push('/dashboard');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const erros = getValidationErros(err);
          console.log(err);
          formRef.current?.setErrors(erros);

          return;
        }
      }
    },
    [history, signIn]
  );

  return (
    <Container>
      <Content>
        <MainContent>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <HeaderTitle>Bem vindo ao Ticket!</HeaderTitle>

            <Input name="email" icon={FiMail} placeholder="Email" />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />

            <Button type="submit">Entrar</Button>

            <Link to="/forgot-password">Esqueci minha senha</Link>
          </Form>
        </MainContent>
      </Content>
    </Container>
  );
};

export default SignIn;
