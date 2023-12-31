import { Field, ObjectType } from '@nestjs/graphql';
import * as dayjs from 'dayjs';

@ObjectType()
export class OSSType {
  @Field({ description: '过期时间' })
  expire?: string;

  @Field({ description: '策略' })
  policy?: string;

  @Field({ description: '签名' })
  signature?: string;

  @Field({ description: '允许ID' })
  accessId?: string;
}
