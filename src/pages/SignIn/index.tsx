import React, { useCallback } from 'react';
import { Form } from '@unform/web';
import {
  Container,
  HeaderTitle,
  HeaderTip,
  Content,
  FromContent,
  MainContent,
} from './styles';

import { Link, useHistory } from 'react-router-dom';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { FiMail, FiLock } from 'react-icons/fi';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const history = useHistory();

  const handleSubmit = useCallback(async (data: SignInFormData) => {
    try {
      console.log(data);
      history.push('/dashboard');
    } catch {}
  }, []);

  return (
    <Container>
      <Content>
        <MainContent>
          <Form onSubmit={handleSubmit}>
            <HeaderTitle>Faça seu Login</HeaderTitle>

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
