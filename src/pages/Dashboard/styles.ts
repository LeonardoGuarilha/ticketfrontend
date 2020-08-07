import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div``;

export const Header = styled.header`
  padding: 32px 0;
  background: #28262e;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  max-width: 1100px;

  button {
    margin-left: auto;
    background: transparent;
    border: 0;
  }

  a {
    text-decoration: none;
    color: #ff9000;
    margin-left: auto;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 80px;
  max-width: 1100px;

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      color: #f4ede8;
    }

    a {
      text-decoration: none;
      color: #ff9000;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

export const Main = styled.main`
  padding: 32px 0;
  max-width: 740px;
  margin: 0 auto;
`;

export const Content = styled.article`
  background: #28262e;
  /* border: 1px solid #e6e6f0; */
  /* border-radius: 50%; */
  margin-top: 24px;
  overflow: hidden;
  margin: 32px auto;
  width: 90%;
`;

export const ContentHeader = styled.header`
  padding: 32px 20px;
  display: flex;
  align-items: center;

  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

  div {
    margin-left: 24px;

    strong {
      font-weight: bold;
      font-size: 24px;
      color: #999591;
      display: block;
    }

    span {
      font-size: 16px;
      display: block;
    }
  }
`;

export const Mensagem = styled.p`
  padding: 0 32px;
`;

export const Footer = styled.footer`
  padding: 20px 20px;
  border-top: 1px solid #999591;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
    background: #ff9000;
    height: 56px;
    border-radius: 10px;
    border: 0;
    padding: 0 16px;
    color: #312e38;
    width: 200px;
    margin-right: 15px;
    font-weight: 500;
    margin-top: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;

    & + a {
      background: transparent;
      border: 1;
      border-color: #ff9000;
      color: #ff9000;
      width: 200px;
      margin-right: 10px;
    }

    &:hover {
      background: ${shade(0.2, '#ff9000')};
    }
  }
`;

export const ContainerLink = styled.div`
  height: 56px;
  border-radius: 10px;
  padding: 0 16px;
  color: #312e38;
  width: 200px;
  margin-right: 15px;
  font-weight: 500;
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #232129;
  border-color: #ff9000;
  cursor: pointer;

  a {
    background: transparent;
    border: 1;
    color: #ff9000;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }

  &:hover {
    background: ${shade(0.2, '#232129')};
  }
`;
