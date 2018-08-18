import React from 'react';
import styled from 'styled-components';

import PokemonCard from './PokemonCard';

const PokemonList = ({ pokemons, favedPokemonIds, toggleFavoritePokemon }) => (
  <StyledPokemonList>
    {pokemons.map(pokemon => (
      <PokemonCard
        pokemon={pokemon}
        key={pokemon.id}
        isFaved={favedPokemonIds.includes(pokemon.id)}
        handleFavorite={id => toggleFavoritePokemon({ variables: { id } })}
      />
    ))}
  </StyledPokemonList>
);

const StyledPokemonList = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: rgb(194, 8, 25);
`;

export default PokemonList;
