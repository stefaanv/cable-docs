import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Room } from './room.model';
import { RoomDto } from './room.dto';

@Injectable()
export class RoomsService {
  constructor(
    @InjectModel(Room)
    private roomsModel: typeof Room,
  ) {}

  async findAll(): Promise<Array<RoomDto>> {
    const rooms = await this.roomsModel.findAll();
    return rooms.map(room => RoomDto.fromEntity(room));
  }

  async findOne(id: string): Promise<RoomDto> {
    const room = await this.roomsModel.findOne({ where: { id } });
    return RoomDto.fromEntity(room);
  }

  async remove(id: string): Promise<void> {
    const room = await this.roomsModel.findOne({ where: { id } });
    await room.destroy();
  }
}
