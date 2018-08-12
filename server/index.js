const { ApolloServer, gql } = require('apollo-server');

const pokemons = require('../data/Pokemon-DB/pokedex.json');

const convertBaseObject = original => ({
  attack: original.Attack,
  defense: original.Defense,
  hp: original.HP,
  spAtk: original['Sp.Atk'],
  spDef: original['Sp.Def'],
  speed: original.Speed
});

const typeDefs = gql`
  type Pokemon {
    id: ID
    base: Base
    cname: String
    ename: String
    jname: String
    skills: Skills
    type: [String]
  }

  type Base {
    attack: Int
    defense: Int
    hp: Int
    spAtk: Int
    spDef: Int
    speed: Int
  }

  type Skills {
    egg: [Int]
    level_up: [Int]
    tm: [Int]
    transfer: [Int]
    tutor: [Int]
  }

  type Skill {
    id: ID
    accuracy: Int
    category: String
    cname: String
    ename: String
    jname: String
    power: Int
    pp: Int
    type: String
  }

  type Type {
    cname: String
    ename: String
    jname: String
  }

  type Item {
    cname: String
    ename: String
    jname: String
  }

  type Query {
    pokemons(cursor: Int): [Pokemon]
    pokemon(id: ID): Pokemon
  }
`;

const COUNT_PER_PAGE = 10;

const resolvers = {
  Query: {
    pokemons(_, args) {
      if (Number.isInteger(args.cursor)) {
        return pokemons.slice(args.cursor, args.cursor + COUNT_PER_PAGE);
      }

      return pokemons;
    },
    pokemon(root, args, context, info) {
      return pokemons.find(pokemon => Number(pokemon.id) == args.id);
    }
  },
  Pokemon: {
    base(root, args, context, info) {
      return convertBaseObject(root.base);
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
