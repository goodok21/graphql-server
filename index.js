const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
const _ = require('lodash');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    allBolela: [Bolela]
    Bolela(id: ID!): Bolela
  }

  type Bolela @model {
    email: String!
    groups: [Group!]! @relation(name: "GroupOnBolela")
    id: ID! @isUnique
    name: String!
    phone: String!
    secondName: String!
    surname: String!
  }

  type Group @model {
    bolelas: [Bolela!]! @relation(name: "GroupOnBolela")
    id: ID! @isUnique
    title: String!
  }
`);

const fakeDB = {
  bolelas: [
    {
      id: 1,
      name: 'bolela 1',
      secondName: 'to se'
    },
    {
      id: 2,
      name: 'bolela 2'
    }
  ]
}

// The root provides a resolver function for each API endpoint
var root = {
  allBolela: () => {
    return fakeDB.bolelas;
  },
  Bolela: ({ id }) => {
    let bolela = _.findIndex(fakeDB.bolelas, { id: id++ });
    console.log(fakeDB, bolela);
    let data;
    if (bolela > -1) {
      data = fakeDB.bolelas[bolela]
    } else {
      data = null
    }
    return data;
  }
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');
