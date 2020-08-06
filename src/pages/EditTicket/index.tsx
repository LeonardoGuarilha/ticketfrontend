import React, { useEffect, useState, useCallback, useRef } from 'react';
import { Link, useRouteMatch, useHistory } from 'react-router-dom';

import { Container, Header, HeaderContent, Profile, Main } from './styles';
import { FiPower } from 'react-icons/fi';
import { Form } from '@unform/web';
import api from '../../services/api';
import Button from '../../components/Button';
import Textarea from '../../components/TextArea';
import { FormHandles } from '@unform/core';

interface EditParams {
  id: string;
}

interface Ticket {
  mensagem: string;
}

const EditTicket: React.FC = () => {
  const { params } = useRouteMatch<EditParams>();
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);
  const [ticket, setTicket] = useState<Ticket>({} as Ticket);

  useEffect(() => {
    api.get(`tickets/${params.id}`).then((response) => {
      setTicket(response.data);
      console.log(response.data);
    });
  }, [params.id]);

  const handleAnswerTicket = useCallback((data: Ticket) => {
    api.put(`tickets/${params.id}`, { mensagem: data.mensagem });

    console.log(data.mensagem);

    history.push('/dashboard');
  }, []);

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
        <Form ref={formRef} onSubmit={handleAnswerTicket}>
          <span>Resposta</span>
          <Textarea name="mensagem" placeholder="Resposta do ticket..." />

          <Button type="submit">Entrar</Button>
        </Form>
      </Main>
    </Container>
  );
};

export default EditTicket;
