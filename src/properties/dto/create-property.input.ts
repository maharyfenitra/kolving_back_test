import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePropertyInput {
  @Field()
  title: string;
  @Field()
  adress: string;
  @Field(() => Int)
  surface: number;
  @Field()
  picture: string;
}
