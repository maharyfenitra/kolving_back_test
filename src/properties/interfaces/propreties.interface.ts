import { Document } from 'mongoose';

export interface Propreties extends Document {
  readonly title: string;
  readonly adress: string;
  readonly surface: number;
  readonly picture: string;
}
