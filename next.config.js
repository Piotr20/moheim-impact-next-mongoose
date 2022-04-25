/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGODB_URI: "mongodb+srv://Piotrdev:mongopas@cluster0.az3ak.mongodb.net/Moheim",
  },
};

module.exports = nextConfig;
