import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Room } from './room.entity';
import { RoomDto } from './room.dto';

@Injectable()
export class RoomsService {
  constructor(
    @InjectRepository(Room)
    private RoomsRepository: Repository<Room>,
  ) {}

  async findAll(): Promise<Array<RoomDto>> {
    const roomEntities = await this.RoomsRepository.find();
    return roomEntities.map(room => RoomDto.fromEntity(room));
  }

  async findOne(id: string): Promise<RoomDto> {
    const roomEntity = await this.RoomsRepository.findOne(id);
    return RoomDto.fromEntity(roomEntity);
  }

  async remove(id: string): Promise<void> {
    await this.RoomsRepository.delete(id);
  }
}
