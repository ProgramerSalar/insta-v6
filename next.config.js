/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:["cdn2.downdetector.com" , "www.computerhope.com"]
  }
}

module.exports = nextConfig
