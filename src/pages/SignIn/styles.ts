import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: 480px;
  width: 100%;
  background-color: #232129;
  padding: 30px;
  border-radius: 5px;
`;

export const HeaderTitle = styled.h1`
  margin-top: 0;
  color: black;
`;

export const HeaderTip = styled.p`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: black;
  margin: 16px 0;
`;

export const FromContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
