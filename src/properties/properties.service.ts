import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreatePropertyInput } from './dto/create-property.input';
import { UpdatePropertyInput } from './dto/update-property.input';
import { Propreties } from './interfaces/propreties.interface';

@Injectable()
export class PropertiesService {
  constructor(
    @InjectModel('Proprety')
    private readonly propretiesModel: Model<Propreties>,
  ) {}

  async create(createPropertyInput: CreatePropertyInput) {
    const createdProprety = new this.propretiesModel(createPropertyInput);
    return await createdProprety.save();
  }

  async findAll(): Promise<Propreties[]> {
    return await this.propretiesModel.find().exec();
  }

  async findOne(id: string) {
    console.log(id);
    // return `This action returns a #${id} property`;
    return await this.propretiesModel.findOne({ _id: id });
  }

  update(id: string, updatePropertyInput: UpdatePropertyInput) {
    return `This action updates a #${id} property`;
  }

  remove(id: number) {
    return `This action removes a #${id} property`;
  }
}
