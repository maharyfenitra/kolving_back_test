import { Module } from '@nestjs/common';
import { AdsService } from './ads.service';
import { AdsResolver } from './ads.resolver';

@Module({
  providers: [AdsResolver, AdsService]
})
export class AdsModule {}
