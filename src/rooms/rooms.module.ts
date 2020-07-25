import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomsService } from '@rooms/rooms.service';
import { RoomsController } from '@rooms/rooms.controller';
import { Room } from '@rooms/room.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Room])],
  providers: [RoomsService],
  controllers: [RoomsController],
})
export class RoomsModule {}
