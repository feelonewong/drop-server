import { Resolver, Query } from '@nestjs/graphql';
import { OSSType } from './dto/oss.type';
import { OSSService } from './oss.service';
@Resolver()
export class OSSResolver {
  constructor(private readonly ossService: OSSService) {}
  @Query(() => OSSType, { description: '获取Oss配置信息' })
  async getOSSInfo(): Promise<OSSType> {
    return this.ossService.getSignature();
  }
}
