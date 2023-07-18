import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './modules/user/user.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UserService,
  ) {}
  // 新增用户数据
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
  @Get('/del')
  async del(): Promise<boolean> {
    return await this.userService.del('36a33283-336b-4a7e-bbe6-003b9d71ba9b');
  }
}
