import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class Property {
  @Field(() => ID)
  id: string;
  @Field()
  readonly title: string;

  @Field()
  adress: string;

  @Field(() => Int)
  surface: number;

  @Field()
  picture: string;
}
