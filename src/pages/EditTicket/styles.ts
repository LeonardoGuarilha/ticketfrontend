import styled from 'styled-components';

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
  /* margin: 3.2rem auto;
  width: 90%; */

  padding: 32px 0;
  max-width: 740px;
  margin: 0 auto;

  a {
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
  }

  span {
    font-size: 20px;
  }
`;

export const Footer = styled.footer`
  padding: 20px 20px;
  border-top: 1px solid #999591;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  a {
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
  }
`;
