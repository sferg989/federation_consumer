import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { withZephyr } from 'zephyr-webpack-plugin';

export default defineConfig({
  tools: {
    rspack: (config) => {
      config.resolve ||= {};
      config.resolve.alias ||= {};
      config.resolve.alias['@util'] = 'src/util';
      return withZephyr({
        
      })(config);
    },
  },
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'federation_consumer',
      remotes: {
        federation_provider:
          'federation_provider@http://localhost:3000/mf-manifest.json',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  server: {
    port: 2000,
  },
});
