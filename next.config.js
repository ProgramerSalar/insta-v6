/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:["download.logo.wine","upload.wikimedia.org" ]
  }
}

module.exports = nextConfig
