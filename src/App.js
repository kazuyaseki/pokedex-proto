import React from 'react';
import styled from 'styled-components';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { compose, withState } from 'recompose';
import LoadingScreen from './components/LoadingScreen';
import TypeLabel from './components/TypeLabel';

import PokemonCard from './components/PokemonCard';

const query = gql`
  query pokemons($cursor: Int, $filterType: String) {
    pokemons(cursor: $cursor, filterType: $filterType) {
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
    types {
      jname
      cname
    }
  }
`;

const enhanceTypeFilter = withState('filterType', 'setFilterType', '');
const enhanceFavedPokemonIds = withState(
  'favedPokemonIds',
  'setFavedPokemonIds',
  ['001']
);

const App = enhanceTypeFilter(({ filterType, setFilterType }) => (
  <Query query={query} variables={{ cursor: 0, filterType }}>
    {({ loading, data }) => {
      if (loading) return <LoadingScreen />;

      return (
        <div>
          <Header>
            <WithStateSearchBox />
            {data.types.map(type => (
              <TypeLabel
                type={type.cname}
                onClick={() => setFilterType(t => (t = type.cname))}
              />
            ))}
          </Header>
          <DummyPokemonList pokemons={data.pokemons} />
        </div>
      );
    }}
  </Query>
));

const Header = styled.header`
  width: 100vw;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  background: linear-gradient(
    135deg,
    rgba(34, 35, 38, 1) 0%,
    rgba(51, 56, 58, 1) 5%,
    rgba(74, 79, 84, 1) 21%,
    rgba(52, 55, 58, 1) 47%,
    rgba(69, 72, 77, 1) 71%,
    rgba(41, 42, 45, 1) 90%,
    rgba(20, 20, 20, 1) 100%
  );
`;

const SearchBox = styled.input`
  height: 28px;
  width: calc(100vw - 80px);
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.16);
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.24);
  background-image: url('/icon-search.svg');
  background-repeat: no-repeat;
  background-position: 5px center;
`;

const enhance = withState('searchText', 'setText', '');
const WithStateSearchBox = enhance(({ searchText, setText }) => (
  <SearchBox value={searchText} onChange={e => setText(e.target.value)} />
));

const PokemonList = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: rgb(194, 8, 25);
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

const DummyPokemonList = ({ pokemons }) => (
  <Query query={GET_FAVED_POKEMON_IDS}>
    {({ loading, data }) => {
      if (loading) return <p>Loading...</p>;

      return (
        <Mutation mutation={TOGGLE_FAV_POKEMON}>
          {(toggleFavoritePokemon, result) => (
            <PokemonList>
              {pokemons.map(pokemon => (
                <PokemonCard
                  pokemon={pokemon}
                  key={pokemon.id}
                  isFaved={data.favedPokemonIds.includes(pokemon.id)}
                  handleFavorite={id =>
                    toggleFavoritePokemon({ variables: { id } })
                  }
                />
              ))}
            </PokemonList>
          )}
        </Mutation>
      );
    }}
  </Query>
);

const EnhancedPokemonList = enhanceFavedPokemonIds(
  ({ favedPokemonIds, setFavedPokemonIds, pokemons }) => (
    <PokemonList>
      {pokemons.map(pokemon => (
        <PokemonCard
          pokemon={pokemon}
          key={pokemon.id}
          isFaved={favedPokemonIds.includes(pokemon.id)}
          handleFavorite={id => {
            setFavedPokemonIds(ids => {
              if (!ids.includes(id)) {
                return [...ids, id];
              } else {
                return ids.filter(_id => _id !== id);
              }
            });
          }}
        />
      ))}
    </PokemonList>
  )
);

export default App;
