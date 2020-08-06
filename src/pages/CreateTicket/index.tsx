import React, { useRef, useCallback } from 'react';

import { Container, Header, HeaderContent, Profile, Main } from './styles';
import { Link, useHistory } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';
import Input from '../../components/Input';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import Textarea from '../../components/TextArea';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

interface TicketData {
  assunto: string;
  mensagem: string;
  tag: string;
}

const CreateTicket: React.FC = () => {
  const navigation = useHistory();
  const { user } = useAuth();

  const handleSubmit = useCallback(
    async (data: TicketData) => {
      const { assunto, mensagem, tag } = data;

      try {
        await api.post('tag', { nome: tag });

        await api.post('tickets', {
          assunto,
          criador: user.name,
          mensagem,
          usuarioAtual: user.id,
          status: 'ABERTO',
          respondido: false,
          nometag: tag,
          userId: user.id,
        });
        navigation.push('/dashboard');
      } catch (err) {
        alert('Ocorreu um erro ao criar o ticket');
      }
    },
    [navigation, user.id, user.name]
  );

  const formRef = useRef<FormHandles>(null);
  return (
    <Container>
      <Header>
        <HeaderContent>
          <Profile>
            <img
              src="https://avatars2.githubusercontent.com/u/39388688?s=460&u=3476f0244eb92639f1e5fa7c0f14f0086bd272d8&v=4"
              alt="Leonardo"
            />

            <div>
              <span>Bem-vindo,</span>
              <Link to="/profile">
                <strong>Leonardo</strong>
              </Link>
            </div>
          </Profile>

          <button type="button" onClick={() => {}}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Main>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="assunto" placeholder="Assunto" />
          <Input name="tag" placeholder="Tag" />
          <Textarea name="mensagem" placeholder="Mensagem" />
          <Button type="submit">Criar ticket</Button>
        </Form>
      </Main>
    </Container>
  );
};

export default CreateTicket;
