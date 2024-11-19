/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.printler.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
