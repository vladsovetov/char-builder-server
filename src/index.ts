import 'reflect-metadata'
import { ApolloServer } from 'apollo-server-express'
import Express from 'express'
import { buildSchema } from 'type-graphql'

import { PanelsResolver } from 'resolves'

const main = async () => {
  const schema = await buildSchema({
    resolvers: [PanelsResolver]
  })

  const apolloServer = new ApolloServer({
    schema
  })

  const app = Express()

  apolloServer.applyMiddleware({ app })

  app.listen(4000, () => {
    console.log('server started on http://localhost:4000/graphql')
  })
}

main()
