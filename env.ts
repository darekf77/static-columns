import type { EnvOptions } from 'tnp/src';
// const backgroundColor = '##1E90FF'; // DodgerBlue

const env: Partial<EnvOptions> = {
  website: {
    domain: 'static-columns.example.domain.com',
    title: 'Static Columns',
  },
  loading: {
    preAngularBootstrap: {
      // background: backgroundColor,
      loader: {
        color: 'lightgray',
        name: 'lds-default'
      }
    }
  }
};
export default env;
