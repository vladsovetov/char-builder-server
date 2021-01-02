import { Query, Resolver } from 'type-graphql'

@Resolver()
export class PanelsResolver {
  @Query(() => [String])
  async panels() {
    return ['1', '2', '3']
  }
}
