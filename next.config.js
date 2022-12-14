/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}
require('dotenv').config()
module.exports = {
  env: {
    API_URL: process.env.API_URL
  }
}