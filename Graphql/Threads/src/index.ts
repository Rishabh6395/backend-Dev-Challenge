import express from 'express'
import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@as-integrations/express5';
import { prismaClient } from './lib/db';


async function init() {
    const app = express()
    const PORT = Number(process.env.PORT) || 8000

    app.use(express.json())
    // create graphql Server
    const gqlServer = new ApolloServer({
        typeDefs: `
            type Query {
                hello: String
                say(name: String): String
            }
            type Mutationn{
                createUser(firstName: String!, lastName: String!, email: String!, password: String!): Boolean
            }
        `, // Schema
        resolvers: {
            Query: {
                hello: () => 'Hello world!',
                say: (_, {name}: {name: string}, ) => `Hey ${name}, How are you`
            },
            Mutation: {
                crateUser: async(_, {firstName, lastName, email, password} : {firstName: string, lastName:string, email:string, password:string }) => {
                    await prismaClient.user.create({
                        data:{
                            email,
                            firstName,
                            lastName,
                            password,
                            salt: 'random_salt',
                        },
                    })
                    return true;
                }
            }
        }
    })

    // start the gql server
    await gqlServer.start()

    app.get('/', (req, res) => {
        res.json({message: "Server is up and running"})
    })

    // app.use('/graphql', expressMiddleware(gqlServer, {}))
    app.use("/graphql", expressMiddleware(gqlServer))

    app.listen(PORT, () => console.log(`Server is starting at PORT: ${PORT}`))
}

init()