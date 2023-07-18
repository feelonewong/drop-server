import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './modules/user/user.service';
import { User } from './modules/user/models/user.entity';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UserService,
  ) {}
  // 新增用户
  @Get('/create')
  async create(): Promise<boolean> {
    return await this.userService.create({
      name: '水滴超级管理员',
      desc: '管理员',
      tel: '17355196519',
      password: '123456',
      account: 'admin',
    });
  }
  // 删除用户
  @Get('/del')
  async del(): Promise<boolean> {
    return await this.userService.del('36a33283-336b-4a7e-bbe6-003b9d71ba9b');
  }
  // 更新用户
  @Get('/update')
  async update(): Promise<boolean> {
    return await this.userService.update(
      'be173a73-46e0-4797-909d-84443c7337ed',
      {
        name: '水滴管理员111',
      },
    );
  }
  // 查找用户
  @Get('/query')
  async query(): Promise<User> {
    return await this.userService.query('be173a73-46e0-4797-909d-84443c7337ed');
  }
}
