import React from 'react';
import styled, { keyframes } from 'styled-components';

import EffectFragment from './EffectFragment';

const fragments = () => {
  const parts = [];
  const numFragments = Math.floor(Math.random() * 3) + 5;

  for (let i = 1; i <= numFragments; i += 1) {
    parts.push(
      <EffectFragment key={i} index={i} numFragments={numFragments} />
    );
  }

  return parts;
};

const FavButton = ({ isFaved, handleFavorite }) => (
  <StyledFavButton onClick={() => handleFavorite()}>
    <FavoriteEffect deg={Math.floor(Math.random() * 180)}>
      <FavedEffectWrapper isFaved={isFaved}>{fragments()}</FavedEffectWrapper>
    </FavoriteEffect>

    <FavedImage isFaved={isFaved} />
  </StyledFavButton>
);

const StyledFavButton = styled.button`
  display: inline-block;
  height: 44px;
  width: 44px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  overflow: visible;
`;

const FavoriteEffect = styled.div`
  transform-origin: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotate(${props => props.deg}deg);
`;

const FavedEffectWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  animation-delay: 0.2s;
  animation: ${props => (props.isFaved ? FavedEffectAnimation : '')} 0.3s ease
    forwards;
`;

// prettier-ignore
const FavedImage = styled.span`
  top: 1px;
  display: inline-block;
  width: 44px;
  height: 44px;
  background-image: url(${({ isFaved }) => isFaved ? '/icon-fav.svg' : '/icon-unfav.svg'});
  background-position: center;
  background-size: 21px 21px;
  background-repeat: no-repeat;
  vertical-align: bottom;
  position: relative;
  animation: ${props => (props.isFaved ? FavedAnimation : '')} 0.3s ease
    forwards;
`;

const FavedAnimation = keyframes`
  0% {
      transform: scale(.3);
  }

  10% {
      transform: scale(1.3);
  }

  100% {
      transform: scale(1);
  }
`;

const FavedEffectAnimation = keyframes`
  0% {
    transform: scale(0.7);
    opacity: 1;
  }
  100% {
    transform: scale(1.2);
    opacity: 0;
  }
`;

export default FavButton;
