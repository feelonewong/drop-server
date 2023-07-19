import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserType {
  @Field({ description: 'ID' })
  id?: string;

  @Field({ description: '姓名' })
  name?: string;

  @Field({ description: '详情' })
  desc?: string;

  @Field({ description: '账户信息' })
  account?: string;
}
