# GraphQL Crash Course

## What is GraphQL?

**GraphQL** is a query language for APIs and a runtime for executing those queries by using a type system you define for your data. It was developed by Facebook and is an alternative to REST APIs.

### Simple Example

**REST:**  
To get a user's name and their todos, you might need to call two endpoints:
- `/users/1`
- `/users/1/todos`

**GraphQL:**  
You can get all the data you need in a single request:
```graphql
query {
  getUser(id: 1) {
    name
    todos {
      title
      completed
    }
  }
}
```

## Advantages of GraphQL

- **Ask for what you need:** Clients can request exactly the data they want, nothing more or less.
- **Single endpoint:** All queries and mutations go through a single `/graphql` endpoint.
- **Strongly typed:** The schema defines types and relationships, making APIs self-documenting and easier to use.
- **No over-fetching or under-fetching:** Only the requested data is returned.
- **Easier to evolve APIs:** You can add new fields and types without impacting existing queries.

## How This Project Implements GraphQL

### Backend (Node.js + Express + Apollo Server)

- **Apollo Server** is used to create a GraphQL server.
- **Express** is used as the HTTP server.
- **Axios** is used to fetch data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/) (a free fake REST API).

#### Schema

The schema defines two main types: `User` and `Todo`, and three queries:
- `getTodos`: Get all todos.
- `getAllUsers`: Get all users.
- `getUser(id: ID!)`: Get a single user by ID.

#### Example Schema
```graphql
type User {
  id: ID!
  name: String!
  username: String!
  email: String!
}

type Todo {
  id: ID!
  title: String!
  completed: Boolean
  user: User
}

type Query {
  getTodos: [Todo]
  getAllUsers: [User]
  getUser(id: ID!): User
}
```

#### Resolvers

Resolvers define how to fetch the data for each field in the schema.  
For example, the `user` field in `Todo` fetches the user by `userId`.

#### Server Setup (Simplified)
```js
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const typeDefs = `...`; // see above
const resolvers = { ... }; // see above

async function startServer() {
  const app = express();
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  app.use(express.json());
  app.use(cors());
  app.use("/graphql", expressMiddleware(server));
  app.listen(8000, () => console.log("Server is listening at PORT 8000"));
}
startServer();
```

### Frontend (React + Apollo Client)

- **Apollo Client** is used to connect to the GraphQL server.
- The React app queries todos and displays their titles and user names.

#### Example Query in React
```js
const query = gql`
  query GetTodosWithUser {
    getTodos {
      id
      title
      completed
      user {
        id
        name
      }
    }
  }
`
```

#### Displaying Data
```jsx
function App() {
  const { data, loading } = useQuery(query)
  if (loading) return <h1>Loading..</h1>
  return (
    <div className='App'>
      <table>
        <tbody>
          {data.getTodos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.title}</td>
              <td>{todo.user.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
```

## How to Run This Project

1. **Install dependencies**  
   In both `server` and `client` folders, run:
   ```
   npm install
   ```

2. **Start the backend server**  
   ```
   node server/index.js
   ```
   The GraphQL endpoint will be at `http://localhost:8000/graphql`.

3. **Start the frontend React app**  
   ```
   npm start
   ```
   The app will connect to the backend and display todos with user names.

---

## Summary

- **GraphQL** lets you fetch exactly the data you need in a single request.
- This project demonstrates a simple full-stack GraphQL app using Node.js, Apollo Server, React, and Apollo Client.
- The backend fetches data from a public REST API and exposes it via GraphQL.
- The frontend queries the backend and displays the results.
