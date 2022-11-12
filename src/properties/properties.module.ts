import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PropertiesService } from './properties.service';
import { PropertiesResolver } from './properties.resolver';
import { PropertySchema } from './schema/property.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Proprety', schema: PropertySchema }]),
  ],
  providers: [PropertiesResolver, PropertiesService],
})
export class PropertiesModule {}
