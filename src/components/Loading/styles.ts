import styled, { keyframes } from 'styled-components';

const animateLoading = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  svg {
    animation: ${animateLoading} 2s infinite;
  }
`;
