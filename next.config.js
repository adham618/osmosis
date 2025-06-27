import withPlugins from 'next-compose-plugins'
import withSvgr from 'next-plugin-svgr'

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error', 'warn'] } : false
  }
}

export default withPlugins([withSvgr], nextConfig)
