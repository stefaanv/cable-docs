import { Controller, Get, Param } from '@nestjs/common';
import { RoomsService } from '@rooms/rooms.service';
import { RoomDto } from '@rooms/room.dto';

@Controller('room')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  @Get('all')
  async getAll(): Promise<Array<RoomDto>> {
    return this.roomsService.findAll();
  }

  @Get(':roomId')
  async getBook(@Param('roomId') roomId: string): Promise<RoomDto> {
    return this.roomsService.findOne(roomId);
  }
}
