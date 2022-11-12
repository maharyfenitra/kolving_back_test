import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Ad {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
