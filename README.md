# GraphQL Server

```
  git clone https://github.com/goodok21/graphql-server.git
  cd graphql-server
  npm i && npm run start
```

API endpoint will be able at `localhost:4000`

# Queries

Open your in browser: `localhost:4000/graphql`

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
