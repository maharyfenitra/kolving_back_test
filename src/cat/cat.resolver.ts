import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CatService } from './cat.service';
import { CreateCatDto } from './dto/create-cat-dto';
import { CatInput } from './inputs/cat.input';

@Resolver()
export class CatResolver {
  constructor(private readonly catsService: CatService) {}

  @Query(() => [CreateCatDto])
  async cats() {
    return this.catsService.findAll();
  }

  @Mutation(() => CreateCatDto)
  async createCats(@Args('input') input: CatInput) {
    return this.catsService.create(input);
  }
}
