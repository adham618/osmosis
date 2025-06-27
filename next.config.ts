/** @type {import('next').NextConfig} */

const withPlugins = require('next-compose-plugins')
const withSvgr = require('next-plugin-svgr')

const nextConfig = {
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error', 'warn'] } : false
  }
}

export default withPlugins([withSvgr], nextConfig)
