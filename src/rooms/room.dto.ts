import { Room } from './room.entity';

export class RoomDto {
  id: number;
  name: string;

  public static fromEntity(roomEntity: Room): RoomDto {
    const roomDto = new RoomDto();
    roomDto.id = roomEntity.id;
    roomDto.name = roomEntity.name;
    return roomDto;
  }

  public static ToEntity(roomDto: RoomDto): Room {
    const roomEntity = new Room();
    roomEntity.name = roomDto.name;
    //The other fields are filled by the database
    return roomEntity;
  }
}
