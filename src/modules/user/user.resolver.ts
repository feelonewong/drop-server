import { Args, Resolver, Mutation, Query } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserInput } from './dto/user.input.type';
import { User } from './models/user.entity';
import { UserType } from './dto/user.type';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  // 新增
  @Mutation(() => Boolean, { description: '新建用户' })
  async create(@Args('params') params: UserInput): Promise<boolean> {
    return await this.userService.create(params);
  }
  // 查询
  @Query(() => UserType, { description: '使用id查询用户' })
  async find(@Args('id') id: string): Promise<User> {
    return await this.userService.query(id);
  }
  // 更新
  @Mutation(() => Boolean, { description: '更新用户' })
  async update(
    @Args('id') id: string,
    @Args('params') params: UserInput,
  ): Promise<boolean> {
    return await this.userService.update(id, params);
  }
  // 删除
  @Mutation(() => Boolean, { description: '删除用户' })
  async del(@Args('id') id: string): Promise<boolean> {
    return await this.userService.del(id);
  }
}
