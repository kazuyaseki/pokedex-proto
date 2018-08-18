import React from 'react';
import styled from 'styled-components';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import PokemonList from './PokemonList';

const query = gql`
  query pokemons($ids: [ID]) {
    pokemons(ids: $ids) {
      id
      jname
      ename
      base {
        attack
        defense
        hp
        spAtk
        spDef
        speed
      }
      type
    }
  }
`;

const GET_FAVED_POKEMON_IDS = gql`
  query {
    favedPokemonIds @client
  }
`;

const TOGGLE_FAV_POKEMON = gql`
  mutation($id: ID!) {
    favPokemon(id: $id) @client {
      id
    }
  }
`;

// こういうのはHOCで取り外せるようにする方が綺麗なのかも
const FavedPokemons = () => (
  <Query query={GET_FAVED_POKEMON_IDS}>
    {({ loading, data }) => {
      if (loading) return <p>Loading...</p>;

      return (
        <Query query={query} variables={{ ids: data.favedPokemonIds }}>
          {({ loading: pokemonLoading, data: pokemonData }) => {
            if (pokemonLoading) return <p>Loading...</p>;

            return (
              <Mutation mutation={TOGGLE_FAV_POKEMON}>
                {toggleFavoritePokemon => (
                  <PokemonList
                    pokemons={pokemonData.pokemons}
                    favedPokemonIds={data.favedPokemonIds}
                    toggleFavoritePokemon={toggleFavoritePokemon}
                  />
                )}
              </Mutation>
            );
          }}
        </Query>
      );
    }}
  </Query>
);

export default FavedPokemons;
