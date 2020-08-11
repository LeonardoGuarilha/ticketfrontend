import React, {
  useRef,
  useCallback,
  useEffect,
  useState,
  ChangeEvent,
} from 'react';

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
}

interface TagData {
  id: number;
  nome: string;
}

const CreateTicket: React.FC = () => {
  const { user } = useAuth();
  const navigation = useHistory();

  const [tag, setTag] = useState<string[]>([]);
  const [selectedTag, setSelectedTag] = useState('0');
  const [tagId, setTagId] = useState(0);

  useEffect(() => {
    api.get<TagData[]>('tag').then((response) => {
      const tags = response.data.map((tag) => tag.nome);
      setTag(tags);
    });
  }, []);

  function handleSelectTag(event: ChangeEvent<HTMLSelectElement>) {
    const tag = event.target.value;
    const tagId = event.target.selectedIndex;

    setTagId(tagId);
    setSelectedTag(tag);
  }

  const handleSubmit = useCallback(
    async (data: TicketData) => {
      const { assunto, mensagem } = data;

      try {
        await api.post('tickets', {
          assunto,
          criador: user.nome,
          mensagem,
          usuarioAtual: user.id,
          status: 'ABERTO',
          respondido: false,
          nometag: selectedTag,
          userId: user.id,
          tagId,
        });
        navigation.push('/dashboard');
      } catch (err) {
        alert('Ocorreu um erro ao criar o ticket');
      }
    },
    [navigation, user.id, user.nome, selectedTag, tagId]
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
                <strong>{user.nome}</strong>
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
          <select
            name="tag"
            id="tag"
            value={selectedTag}
            onChange={handleSelectTag}
          >
            <option value="0">Selecione uma tag</option>
            {tag.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <Textarea name="mensagem" placeholder="Mensagem" />
          <Button type="submit">Criar ticket</Button>
        </Form>
      </Main>
    </Container>
  );
};

export default CreateTicket;
