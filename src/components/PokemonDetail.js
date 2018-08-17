import React from 'react';
import styled from 'styled-components';

const PokemonDetail = ({ pokemon }) => (
  <Wrapper>
    <PokemonImage src={`/pokemonImg/${pokemon.id + pokemon.ename}.png`} />
    <DetailPane />
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgb(194, 8, 25);
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
  border-radius: 8px;
`;

export default PokemonDetail;
