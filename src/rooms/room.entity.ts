import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('rooms')
export class Room {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string;

  @Column({ type: 'datetime', nullable: false, default: Date.now() })
  createdAt: Date;

  @Column({ type: 'datetime', nullable: false, default: Date.now() })
  updatedAt: Date;
}
