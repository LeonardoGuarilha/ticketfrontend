import React from 'react';

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

const Dashboard: React.FC = () => {
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
        <Content>
          <ContentHeader>
            <img
              src="https://avatars2.githubusercontent.com/u/39388688?s=460&u=3476f0244eb92639f1e5fa7c0f14f0086bd272d8&v=4"
              alt="Leonardo Guarilha"
            />
            <div>
              <strong>Leonardo Guarilha</strong>
              <span>Química</span>
            </div>
          </ContentHeader>

          <Mensagem>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
            minus, fugit est repellendus similique reiciendis amet eaque <br />{' '}
            <br />
            recusandae perferendis deserunt nihil excepturi non accusamus
            voluptatum, cumque possimus magni iusto natus.
          </Mensagem>

          <Footer>
            <Button>Responder</Button>
          </Footer>
        </Content>

        <Content>
          <ContentHeader>
            <img
              src="https://avatars2.githubusercontent.com/u/39388688?s=460&u=3476f0244eb92639f1e5fa7c0f14f0086bd272d8&v=4"
              alt="Leonardo Guarilha"
            />
            <div>
              <strong>Leonardo Guarilha</strong>
              <span>Química</span>
            </div>
          </ContentHeader>

          <Mensagem>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
            minus, fugit est repellendus similique reiciendis amet eaque <br />{' '}
            <br />
            recusandae perferendis deserunt nihil excepturi non accusamus
            voluptatum, cumque possimus magni iusto natus.
          </Mensagem>

          <Footer>
            <Button>Responder</Button>
          </Footer>
        </Content>
      </Main>
    </Container>
  );
};

export default Dashboard;
