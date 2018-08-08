# GraphQL Server

```
  git clone https://github.com/goodok21/graphql-server.git
  cd graphql-server
  npm i && npm run start
```

# Queries

```
  query allBolelas {
    allBolela {
      id
      name
      secondName
    }
  }

  query Bolela {
    Bolela (id: 1) {
      id
      name
      secondName
    }
  }
```
