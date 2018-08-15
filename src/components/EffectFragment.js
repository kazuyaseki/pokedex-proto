import React from 'react';
import styled from 'styled-components';

const EffectFragment = ({ index, numFragments }) => (
  <Fragment deg={(360 / numFragments) * index}>
    <Circle />
    <Triangle />
  </Fragment>
);

const Fragment = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  transform: rotate(${props => props.deg}deg);
`;

const Circle = styled.div`
  position: absolute;
  width: 4px;
  height: 4px;
  left: 10px;
  border-radius: 50%;
  background-color: #027380;
  transform: rotate(40deg);
`;

const Triangle = styled.div`
  position: absolute;
  top: -10px;
  transform: rotate(10deg);
  border-left: 4px solid transparent;
  border-right: 1px solid transparent;
  border-top: 15px solid #fda7a8;
`;

export default EffectFragment;
