import React from 'react';
import styled from 'styled-components';

import TypeLabel from './TypeLabel';

const CARD_WIDTH = (window.innerWidth - 55) / 2;

const Card = styled.div`
  position: relative;
  height: ${CARD_WIDTH}px;
`;

const Image = styled.div`
  width: ${CARD_WIDTH}px;
  height: ${CARD_WIDTH * (2 / 3)}px;
  border-radius: 8px;
  background-color: #fff;
  background-image: url(${props => props.src});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.24);
`;

const Detail = styled.div`
  width: ${CARD_WIDTH - 16}px;
  padding: 5px 8px;
  display: flex;
  justify-content: space-between;
  color: #fff;
`;

const IdLabel = styled.span`
  position: absolute;
  top: 5px;
  left: 5px;
  padding: 2px 3px;
  color: #888;
  font-size: 10px;
  font-weight: bold;
  border: 1px solid rgba(0, 0, 0, 0.24);
  border-radius: 8px;
`;

const PokemonFontText = styled.span`
  font-family: 'pokemon';
`;

const PokemonCard = ({ pokemon }) => (
  <Card>
    <IdLabel>{pokemon.id}</IdLabel>
    <Image src={`/pokemonImg/${pokemon.id + pokemon.ename}.png`} />
    <Detail>
      <PokemonFontText>{pokemon.jname || pokemon.ename}</PokemonFontText>
      <div>
        {pokemon.type.map(t => (
          <TypeLabel type={t} />
        ))}
      </div>
    </Detail>
  </Card>
);
export default PokemonCard;
