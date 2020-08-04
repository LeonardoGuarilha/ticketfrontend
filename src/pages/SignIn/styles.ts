import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  /* height: 100vh; 
  display: flex;
  align-items: stretch; */

  /* max-width: 480px;
  width: 100%;
  background-color: #edf4ff; 
  padding: 30px;
  border-radius: 5px; */

  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;

  width: 100%;
  max-width: 480px;

  /* background-color: #232129; */
`;

export const HeaderTitle = styled.h1`
  margin-top: 0;
  color: #edf4ff;
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

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromLeft} 1s;

  form {
    margin: 80px 0; /** 80px em cima e em baixo */
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }
`;
