const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
    NEXT_PUBLIC_BACKEND_URL: `${process.env.NODE_ENV === "development" ? "http" : "https"}://${
      process.env.BACKEND_HOST
    }`,
  },
};

console.log(nextConfig);

module.exports = nextConfig;
