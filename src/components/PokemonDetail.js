import React from 'react';
import styled from 'styled-components';
import { basename } from 'path';

const PokemonDetail = ({ pokemon }) => (
  <Wrapper>
    <PokemonImage src={`/pokemonImg/${pokemon.id + pokemon.ename}.png`} />
    <DetailPane>
      <p>{pokemon.jname || pokemon.ename}</p>
      <ul>
        <li>こうげき: {pokemon.base.attack}</li>
        <li>ぼうぎょ: {pokemon.base.defense}</li>
        <li>HP: {pokemon.base.hp}</li>
        <li>とっこう: {pokemon.base.spAtk}</li>
        <li>とくぼう: {pokemon.base.spDef}</li>
        <li>すばやさ: {pokemon.base.speed}</li>
      </ul>
    </DetailPane>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgb(194, 8, 25);
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const PokemonImage = styled.div`
  width: 100vw;
  height: 50vw;
  background-color: #fff;
  background-image: url(${props => props.src});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.24);
`;

const DetailPane = styled.div`
  background-color: #fff;
  border-radius: 16px;
  width: calc(100vw - 40px);
  margin-top: 20px;
`;

export default PokemonDetail;
