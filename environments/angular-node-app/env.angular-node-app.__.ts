import type { EnvOptions } from 'tnp/src';
import baseEnv from '../../env';

const env: Partial<EnvOptions> = {
  ...baseEnv,
  build: {
    ...baseEnv.build,
    websql: true,
    prod: true
  },
};
export default env;
