import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AdsService } from './ads.service';
import { Ad } from './entities/ad.entity';
import { CreateAdInput } from './dto/create-ad.input';
import { UpdateAdInput } from './dto/update-ad.input';

@Resolver(() => Ad)
export class AdsResolver {
  constructor(private readonly adsService: AdsService) {}

  @Mutation(() => Ad)
  createAd(@Args('createAdInput') createAdInput: CreateAdInput) {
    return this.adsService.create(createAdInput);
  }

  @Query(() => [Ad], { name: 'ads' })
  findAll() {
    return this.adsService.findAll();
  }

  @Query(() => Ad, { name: 'ad' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.adsService.findOne(id);
  }

  @Mutation(() => Ad)
  updateAd(@Args('updateAdInput') updateAdInput: UpdateAdInput) {
    return this.adsService.update(updateAdInput.id, updateAdInput);
  }

  @Mutation(() => Ad)
  removeAd(@Args('id', { type: () => Int }) id: number) {
    return this.adsService.remove(id);
  }
}
