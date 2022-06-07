/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGO_URI: `mongodb+srv://Srezz:E0Y550F4bZhiXLeX@cluster0.oshu0.mongodb.net/StudyGuide?retryWrites=true&w=majority`,
  },
};

module.exports = nextConfig;
