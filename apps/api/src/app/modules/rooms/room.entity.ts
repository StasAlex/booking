import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('room')
export class Room {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  number: string;

  @Column()
  rooms: number;

  @Column()
  people: number;

  @Column()
  notes: string;

  @Column({ default: true })
  isClean: boolean;

  @Column()
  price: number;

  @Column()
  imageUrl: string;
}

