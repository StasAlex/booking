import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Room {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 500})
  number: string;

  @Column()
  rooms: number;

  @Column()
  people: number;

  @Column('text')
  notes: string;

  @Column({ default: true })
  isClean: boolean;

  @Column()
  price: number;

  @Column()
  imageUrl: string;
}

