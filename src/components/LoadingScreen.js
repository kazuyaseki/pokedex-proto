import React from 'react';
import styled, { keyframes } from 'styled-components';

const LoadingScreen = () => (
  <ImageContainer>
    <LoadingImage src="/monster_ball.png" />
  </ImageContainer>
);

const ImageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(194, 8, 25);
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const LoadingImage = styled.img`
  width: 64px;
  animation: ${rotate360} 1s linear infinite;
`;

export default LoadingScreen;
