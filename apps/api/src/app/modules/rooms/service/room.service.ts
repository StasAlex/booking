import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult, UpdateResult } from 'typeorm';
import { Room } from '../room.entity';

@Injectable()
export class RoomService {
  constructor(
    @InjectRepository(Room)
    private roomRepository: Repository<Room>
  ) {}

  async findAll(): Promise<Room[]> {
    return await this.roomRepository.find();
  }

  async create(room: Room): Promise<Room> {
    return await this.roomRepository.save(room);
  }

  async update(room: Room): Promise<UpdateResult> {
    return await this.roomRepository.update(room.id, room);
  }

  async delete(id: string): Promise<DeleteResult> {
    return await this.roomRepository.delete(id);
  }

  public getData() {
    return 'Welcome to api!';
  }
}
