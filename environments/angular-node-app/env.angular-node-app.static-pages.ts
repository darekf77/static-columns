import type { EnvOptions } from 'tnp/src';
import baseEnv from './env.angular-node-app.__';

const env: Partial<EnvOptions> = {
  ...baseEnv,
  build: {
    ...baseEnv.build,
    websql: true,
    prod: false,
    pwa: {
      disableServiceWorker: true,
    },
  },
};
export default env;
