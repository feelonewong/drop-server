import { Injectable } from '@nestjs/common';
import * as OSS from 'ali-oss';
import * as dayjs from 'dayjs';
import { OSSType } from './dto/oss.type';
@Injectable()
export class OSSService {
  async getSignature(): Promise<OSSType> {
    const config = {
      accessKeyId: '',
      accessKeySecret: '',
      bucket: '',
      dir: 'images/',
    };
    const client = new OSS(config);
    const date = new Date();
    date.setDate(date.getDate() + 1);
    const policy = {
      expiration: date.toISOString(),
      conditions: [['content-length-range', 0, 1048576000]],
    };
    // 签名
    const formData = await client.calculatePostSignature(policy);
    // bucket签名

    const params = {
      expire: dayjs().add(1, 'days').unix().toString(),
      policy: formData.policy,
      signature: formData.Signature,
      accessId: formData.OSSAccessKeyId,
    };
    return params;
  }
}
