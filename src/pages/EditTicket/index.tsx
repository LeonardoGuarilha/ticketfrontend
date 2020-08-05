import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Main,
  TextArea,
  Footer,
} from './styles';
import { FiPower } from 'react-icons/fi';
import { Form } from '@unform/web';
import Input from '../../components/Input';
import api from '../../services/api';
import Button from '../../components/Button';

interface EditParams {
  id: string;
}

interface Ticket {
  assunto: string;
  mensagem: string;
}

const EditTicket: React.FC = () => {
  const { params } = useRouteMatch<EditParams>();
  const [ticket, setTicket] = useState<Ticket>();

  useEffect(() => {
    api.get(`tickets/${params.id}`).then((response) => {
      setTicket(response.data);
      console.log(response.data);
    });
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
        <Form onSubmit={() => {}}>
          {ticket && (
            <TextArea cols={80} rows={20}>
              {ticket.mensagem}
            </TextArea>
          )}

          <Footer>
            {/* <Link to="/dashboard">Encerrar</Link> */}
            <Button>Responder</Button>
          </Footer>
        </Form>
      </Main>
    </Container>
  );
};

export default EditTicket;
