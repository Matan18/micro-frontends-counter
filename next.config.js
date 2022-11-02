/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, options) => {
    const mfConf = {
      // mergeRuntime: true,
      name: "app1",
      library: {
        type: config.output.libraryTarget,
        name: "app1",
      },
      filename: "static/runtime/app1RemoteEntry.js",
      remotes: {
      },
      exposes: {
        "./counter": "./components/counter",
        "./counterPage": "./pages/counter",
      },
    };
    config.cache = false;
    config.plugins.push(new NextFederationPlugin(mfConf))

    return config;
  }
}

module.exports = nextConfig
