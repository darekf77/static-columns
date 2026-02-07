import type { EnvOptions } from 'tnp/src';
import baseEnv from '../../env';

const env: Partial<EnvOptions> = {
  ...baseEnv,
  build: {
    ...baseEnv.build,
    websql: true,
    prod: true,
    pwa: {
      disableServiceWorker: true,
    },
  },
};
export default env;
