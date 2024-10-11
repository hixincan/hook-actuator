import { defineConfig } from 'father';

export default defineConfig({
  // more father config: https://github.com/umijs/father/blob/master/docs/config.md
  esm: {
    input: 'src',
    output: 'es',
    platform: 'browser',
    transformer: 'babel',
  },
  cjs: {
    input: 'src',
    output: 'lib',
    platform: 'browser',
    transformer: 'babel',
  },
  umd: {
    name: 'hookActuator',
    output: 'dist',
  },
});
