// next.config.js
const { withPlausibleProxy } = require('next-plausible')

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['images.ctfassets.net'],
  }
}

module.exports = withPlausibleProxy()(nextConfig)
