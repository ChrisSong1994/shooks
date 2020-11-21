import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'hooks',
  mode: 'doc',
  favicon: '/logo.png',
  logo: '/logo.png',
  outputPath: 'docs-dist',
  resolve: {
    includes: ['src'],
  },
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
      'antd',
    ],
  ],
});
