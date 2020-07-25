import { Controller, Get, Param } from '@nestjs/common';
import { RoomsService } from '@rooms/rooms.service';
import { Room } from '@rooms/room.entity';

@Controller('room')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  @Get()
  async getAll(): Promise<Array<Room>> {
    return this.roomsService.findAll();
  }

  @Get(':roomId')
  async getBook(@Param('roomId') roomId: string): Promise<Room> {
    return this.roomsService.findOne(roomId);
  }
}
