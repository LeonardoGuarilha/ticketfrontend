import React from 'react';
import {
  Container,
  HeaderTitle,
  HeaderTip,
  Content,
  FromContent,
} from './styles';

import Input from '../../components/Input';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <HeaderTitle>Login</HeaderTitle>
        <HeaderTip>Entre com o email e a senha para login</HeaderTip>

        <FromContent>
          <form>
            <h1>Faça seu login</h1>

            <Input name="email" placeholder="E-mail" />
            <Input name="password" type="password" placeholder="Senha" />
          </form>
        </FromContent>
      </Content>
    </Container>
  );
};

export default SignIn;
