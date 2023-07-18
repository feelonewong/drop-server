import { Args, Resolver, Mutation, Query } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserInput } from './dto/user.input.type';
import { User } from './models/user.entity';
import { UserType } from './dto/user.type';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => Boolean)
  async create(@Args('params') params: UserInput): Promise<boolean> {
    return await this.userService.create(params);
  }
  @Query(() => UserType)
  async find(@Args('id') id: string): Promise<User> {
    return await this.userService.query(id);
  }
}
