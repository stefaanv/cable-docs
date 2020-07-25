import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Room } from './room.entity';

@Injectable()
export class RoomsService {
  constructor(
    @InjectRepository(Room)
    private RoomsRepository: Repository<Room>,
  ) {}

  findAll(): Promise<Room[]> {
    return this.RoomsRepository.find();
  }

  findOne(id: string): Promise<Room> {
    return this.RoomsRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.RoomsRepository.delete(id);
  }
}
