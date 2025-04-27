import type { EnvOptions } from 'tnp/src';
import baseEnv from './env.angular-node-app.__';

const env: Partial<EnvOptions> = {
  ...baseEnv,
  build: {
    ...baseEnv.build,
    websql: true,
    angularProd: true,
  },
};
export default env;
