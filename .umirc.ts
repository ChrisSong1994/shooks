import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'shooks',
  mode: 'doc',
  favicon: '/logo.png',
  logo: '/logo.png',
  outputPath: 'docs-dist',
  resolve: {
    includes: ['src'],
  },
  devServer: {
    port: 7000,
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
