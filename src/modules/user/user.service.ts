import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { User } from './models/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private UserRepository: Repository<User>,
  ) {}
  async create(entity: DeepPartial<User>): Promise<boolean> {
    const res = await this.UserRepository.insert(entity);
    if (res.raw.affectedRows > 0) {
      return true;
    } else {
      return false;
    }
  }

  async del(id: string): Promise<boolean> {
    const res = await this.UserRepository.delete(id);
    if (res.affected > 0) {
      return true;
    } else {
      return false;
    }
  }
}
