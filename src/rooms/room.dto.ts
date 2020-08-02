import { Room } from './room.model';
import { Timestamps } from '@src/app/timestamps';

export class RoomDto {
  id: number;
  name: string;
  timeStamps: Timestamps;

  public static fromEntity(roomEntity: Room): RoomDto {
    const roomDto = new RoomDto();
    roomDto.id = roomEntity.id;
    roomDto.name = roomEntity.name;
    roomDto.timeStamps = new Timestamps(roomEntity);
    return roomDto;
  }

  public static ToEntity(roomDto: RoomDto): Room {
    const roomEntity = new Room();
    roomEntity.name = roomDto.name;
    //The timestamp fields are filled by the database
    return roomEntity;
  }
}
