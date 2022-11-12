import { Injectable } from '@nestjs/common';
import { CreateAdInput } from './dto/create-ad.input';
import { UpdateAdInput } from './dto/update-ad.input';

@Injectable()
export class AdsService {
  create(createAdInput: CreateAdInput) {
    return 'This action adds a new ad';
  }

  findAll() {
    return `This action returns all ads`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ad`;
  }

  update(id: number, updateAdInput: UpdateAdInput) {
    return `This action updates a #${id} ad`;
  }

  remove(id: number) {
    return `This action removes a #${id} ad`;
  }
}
