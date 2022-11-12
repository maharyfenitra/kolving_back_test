import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PropertyDocument = HydratedDocument<Property>;

@Schema()
export class Property {
  @Prop()
  title: string;

  @Prop()
  adress: string;

  @Prop()
  surface: number;

  @Prop()
  picture: string;
}

export const PropertySchema = SchemaFactory.createForClass(Property);
