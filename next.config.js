const protocol = process.env.NODE_ENV === "development" ? "http" : "https";

const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
    NEXT_PUBLIC_BACKEND_URL: `${protocol}://${process.env.BACKEND_HOST}`,
  },
};

module.exports = nextConfig;
