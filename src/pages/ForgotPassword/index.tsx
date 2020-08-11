import React from 'react';

import { Container, Content, MainContent, HeaderTitle } from './styles';
import { Form } from '@unform/web';
import Input from '../../components/Input';
import { FiMail } from 'react-icons/fi';
import Button from '../../components/Button';

const ForgotPassword: React.FC = () => {
  return (
    <Container>
      <Content>
        <MainContent>
          <Form onSubmit={() => {}}>
            <HeaderTitle>Esqueceu sua senha?</HeaderTitle>

            <Input name="email" icon={FiMail} placeholder="Email" />

            <Button type="submit">Enviar</Button>
          </Form>
        </MainContent>
      </Content>
    </Container>
  );
};

export default ForgotPassword;
