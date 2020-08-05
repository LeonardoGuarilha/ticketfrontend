import React, { useEffect, useState } from 'react';

import {
  Container,
  Header,
  HeaderContent,
  Profile,
  ContentHeader,
  Main,
  Mensagem,
  Content,
  Footer,
} from './styles';
import { Link } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

interface Tickets {
  id: number;
  assunto: string;
  mensagem: string;
  criador: string;
  usuarioAtual: string;
  status: string;
  respondido: boolean;
  userId: number;
}

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const [tickets, setTickets] = useState<Tickets[]>([]);
  const [ticketsClientes, setTicketsClientes] = useState<Tickets[]>([]);

  useEffect(() => {
    api.get('tickets/didnotanswer').then((response) => {
      setTickets(response.data);
    });
  }, [tickets]);

  useEffect(() => {
    api.get('tickets').then((response) => {
      setTicketsClientes(response.data);
    });
  }, [ticketsClientes]);

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
        {tickets.map((ticket) => (
          <>
            {!ticket.respondido && user.is_agent && (
              <Content>
                <ContentHeader>
                  <img
                    src="https://avatars2.githubusercontent.com/u/39388688?s=460&u=3476f0244eb92639f1e5fa7c0f14f0086bd272d8&v=4"
                    alt="Leonardo Guarilha"
                  />
                  <div>
                    <strong>{ticket.criador}</strong>
                    <span>{ticket.assunto}</span>
                  </div>
                </ContentHeader>

                <Mensagem>{ticket.mensagem}</Mensagem>

                {user.is_agent && (
                  <Footer>
                    <Link to={`/ticket/${ticket.id}`}>Responder</Link>
                  </Footer>
                )}
              </Content>
            )}
          </>
        ))}

        {ticketsClientes.map((ticket) => (
          <>
            {ticket.userId === Number(user.id) && user.is_agent === false && (
              <Content>
                <ContentHeader>
                  <img
                    src="https://avatars2.githubusercontent.com/u/39388688?s=460&u=3476f0244eb92639f1e5fa7c0f14f0086bd272d8&v=4"
                    alt="Leonardo Guarilha"
                  />
                  <div>
                    <strong>{ticket.criador}</strong>
                    <span>{ticket.assunto}</span>
                  </div>
                </ContentHeader>

                <Mensagem>{ticket.mensagem}</Mensagem>

                <Footer>
                  <Link to="/">Encerrar</Link>
                  <Link to={`/ticket/${ticket.id}`}>Responder</Link>
                </Footer>
              </Content>
            )}
          </>
        ))}
      </Main>
    </Container>
  );
};

export default Dashboard;
